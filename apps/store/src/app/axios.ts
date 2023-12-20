import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'

export function getApiClient(ctx?: any) {
  const api = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
  })

  // api.interceptors.request.use((config) => {
  //   const { ['access_token']: token } = parseCookies()

  //   if (token) {
  //     api.defaults.headers['Authorization'] = `Bearer ${token}`
  //     config.headers['Authorization'] = `Bearer ${token}`
  //   }

  //   return config
  // })

  // api.interceptors.response.use(
  //   (response) => {
  //     return response
  //   },
  //   async (error) => {
  //     console.error(error.response.data)
  //     if (
  //       error.response.status === 403 &&
  //       error.response.data.error === 'session_expired'
  //     ) {
  //       try {
  //         const { ['access_token']: accessToken } = parseCookies()
  //         const { ['refresh_token']: refreshToken } = parseCookies()

  //         const res = await axios.post('http://localhost:3001/refresh', {
  //           refresh_token: refreshToken,
  //         }, {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${accessToken}`,
  //           }
  //         })

  //         if (res.data && res.data.tokens.access_token) {
  //           const { tokens } = res.data

  //           setCookie(ctx, 'access_token', tokens.access_token, {
  //             maxAge: 60 * 60 * 24 * 7, //1 semana
  //           })
  //           setCookie(ctx, 'refresh_token', tokens.refresh_token, {
  //             maxAge: 60 * 60 * 24 * 7, //1 semana
  //           })

  //           // cookies().set('access_token', tokens.access_token, {
  //           //   maxAge: 60 * 60 * 24 * 7 //1 semana
  //           // })
  //           // cookies().set('refresh_token', tokens.refresh_token, {
  //           //   maxAge: 60 * 60 * 24 * 7 //1 semana
  //           // })

  //           return api(error.config);
  //           //return Promise.reject(error)
  //         }
  //       } catch (refreshError) {
  //         console.error('Erro ao renovar o token:', refreshError)
  //       }
  //     }

  //     return Promise.reject(error)
  //   }
  // )

  return api
}
