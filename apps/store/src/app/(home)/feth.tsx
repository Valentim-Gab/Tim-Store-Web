import { redirect } from 'next/navigation'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

export async function FetchAuth(url: string, method: string, ctx: any) {
  try {
    const { ['access_token']: token } = parseCookies()

    const res = await fetch(url, {
      method: method,
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.json()

    if (
      res.status === 403 &&
      data.error === 'session_expired'
    ) {
      if (await refreshToken()) {
        return FetchAuth(url, method, ctx)
      } else {
        logout()
      }
    } else if (res.status === 401) {
      logout()
    }

    return data
  } catch (err) {
    console.error(err)
  }

  async function refreshToken(): Promise<boolean> {
    const { ['access_token']: accessToken } = parseCookies()
    const { ['refresh_token']: refreshToken } = parseCookies()

    const resRefresh = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    console.log(await resRefresh.json())

    if (resRefresh.ok && resRefresh.status === 201) {
      const { tokens } = await resRefresh.json()

      if (tokens.access_token && tokens.refresh_token) {
        setCookie(ctx, 'access_token', tokens.access_token, {
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
        setCookie(ctx, 'refresh_token', tokens.refresh_token, {
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })

        return true
      }
    } else if (resRefresh.status === 403 || resRefresh.status === 401) {
      return false
    }

    return false
  }

  function logout() {
    console.warn('[LOGOUT]')
    // destroyCookie(ctx, 'access_token')
    // destroyCookie(ctx, 'refresh_token')

    // if (typeof window === 'undefined') {
    //   ctx.res.writeHead(302, { Location: '/login' })
    //   ctx.res.end()
    // } else {
    //   window.location.href = '/login'
    // }
  }
}
