import axios from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { redirect } from 'next/navigation'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const baseURL = 'http://localhost:3001'

const defaultOptions = {
  baseURL,
}

export function getAPIClient() {
  const ApiClient = axios.create(defaultOptions)
  const { access_token: token } = parseCookies()

  let currentToken = token

  ApiClient.interceptors.request.use((config) => {
    if (currentToken) {
      config.headers.Authorization = `Bearer ${currentToken}`
    }

    return config
  })

  ApiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        const { access_token: accessToken, refresh_token: refreshToken } =
          parseCookies()

        if (accessToken && refreshToken) {
          const res = await axios.post(
            'http://localhost:3001/refresh',
            {
              refresh_token: refreshToken,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )

          if (res && res.data) {
            destroyCookie(undefined, 'access_token')
            destroyCookie(undefined, 'refresh_token')

            currentToken = res.data.tokens.access_token
            error.config.headers.Authorization = `Bearer ${currentToken}`

            // Set refreshed token
            setCookie(undefined, 'access_token', res.data.tokens.access_token, {
              maxAge: 60 * 60, // 1 hour
              httpOnly: true,
              secure: true,
            })
            setCookie(
              undefined,
              'refresh_token',
              res.data.tokens.refresh_token,
              {
                maxAge: 60 * 60, // 1 hour
                httpOnly: true,
                secure: true,
              }
            )

            return ApiClient(error.config)
          }
        }
      }
      return Promise.reject(error)
    }
  )
  return ApiClient
}

export function getAPIServer(serverCookies: RequestCookie[]) {
  const ApiServer = axios.create(defaultOptions)

  let isRefreshing = false
  let refreshQueue: (() => void)[] = []

  const { accessToken, refreshToken } =
    getAuthDataFromServerCookies(serverCookies)

  if (!accessToken || !refreshToken) redirect('/login')

  let currentAccessToken = accessToken

  const refreshAccessToken = async () => {
    if (isRefreshing) {
      try {
        // Aguarda a reautenticação antes de prosseguir
        const token = await new Promise<string>((resolve, _) => {
          refreshQueue.push(() => resolve(accessToken))
        })

        return token
      } catch (error) {
        return Promise.reject(error)
      }
    } else {
      isRefreshing = true

      try {
        const res = await axios.post(
          'http://localhost:3001/refresh',
          {
            refresh_token: refreshToken,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )

        if (res && res.data && res.data.tokens) {
          const newAccessToken = res.data.token.access_token

          destroyCookie(undefined, 'access_token')
          destroyCookie(undefined, 'refresh_token')

          // Set refreshed token
          setCookie(undefined, 'access_token', res.data.tokens.access_token, {
            maxAge: 60 * 60, // 1 hour
            httpOnly: true,
            secure: true,
          })
          setCookie(undefined, 'refresh_token', res.data.tokens.refresh_token, {
            maxAge: 60 * 60, // 1 hour
            httpOnly: true,
            secure: true,
          })

          return newAccessToken
        }
      } catch (error) {
        return Promise.reject(error)
      } finally {
        isRefreshing = false
        refreshQueue.forEach((resolve) => resolve())
        refreshQueue = []
      }
    }
  }

  ApiServer.interceptors.request.use(async (config) => {
    if (currentAccessToken) {
      config.headers.Authorization = `Bearer ${currentAccessToken}`
    }
    return config
  })

  ApiServer.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config

      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true

        try {
          const token = await refreshAccessToken()

          if (token) {
            currentAccessToken = token
            originalRequest.headers.Authorization = `Bearer ${currentAccessToken}`

            return ApiServer(originalRequest)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      }

      if (error.response && error.response.status === 500) {
        return null
      } else {
        return Promise.reject(error)
      }
    }
  )

  return ApiServer
}

const getAuthDataFromServerCookies = (cookies: RequestCookie[] | undefined) => {
  const accessToken = String(
    cookies?.find((item) => item.name === 'access_token')?.value
  )
  const refreshToken = String(
    cookies?.find((item) => item.name === 'refresh_token')?.value
  )

  return { accessToken, refreshToken }
}
