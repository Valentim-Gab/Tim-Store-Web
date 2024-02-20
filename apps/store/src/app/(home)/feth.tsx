import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function FetchAuth(url: string, method: string) {
  try {
    const token = cookies().get('access_token')?.value ?? ''

    const res = await fetch(url, {
      method: method,
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    })

    const data = await res.json()

    console.log(res.status)

    if (
      res.status === 403 &&
      data.error === 'session_expired'
    ) {
      if (await refreshToken()) {
        return FetchAuth(url, method)
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
    const accessToken = cookies().get('access_token')?.value
    const refreshToken = cookies().get('refresh_token')?.value

    const resRefresh = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    if (resRefresh.ok && resRefresh.status === 201) {
      const { tokens } = await resRefresh.json()

      if (tokens.access_token && tokens.refresh_token) {
        cookies().set('session', tokens.access_token, {
          httpOnly: true,
          secure: true,
          maxAge: 30,
        })
  
        cookies().set('access_token', tokens.access_token, {
          httpOnly: true,
          secure: true,
        })
  
        cookies().set('refresh_token', tokens.refresh_token, {
          httpOnly: true,
          secure: true,
        })

        console.log('refresh feth')

        return true
      }
    } else if (resRefresh.status === 403 || resRefresh.status === 401) {
      return false
    }

    return false
  }

  function logout() {
    //redirect('/logout')
  }
}
