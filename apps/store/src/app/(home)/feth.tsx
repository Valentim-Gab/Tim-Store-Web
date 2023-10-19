import { parseCookies, setCookie } from 'nookies'

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

    if (res.status === 403 && data.error === 'session_expired') {
      const { ['access_token']: accessToken } = parseCookies()
      const { ['refresh_token']: refreshToken } = parseCookies()

      const res = await fetch('http://localhost:3001/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      })

      if (res.ok) {
        const { tokens } = await res.json()

        if (tokens.access_token && tokens.refresh_token) {
          setCookie(ctx, 'access_token', tokens.access_token, {
            maxAge: 60 * 60 * 24 * 7, //1 semana
          })
          setCookie(ctx, 'refresh_token', tokens.refresh_token, {
            maxAge: 60 * 60 * 24 * 7, //1 semana
          })

          return FetchAuth(url, method, ctx)
        }
      }
    }

    return data
  } catch (err) {
    console.error(err)
  }
}
