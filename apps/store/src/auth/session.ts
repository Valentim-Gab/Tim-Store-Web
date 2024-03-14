import { NextRequest, NextResponse } from 'next/server'

export async function checkSession(
  request: NextRequest,
  protectedRouters: string[]
) {
  const accessToken = request.cookies.get('access_token')?.value
  const refreshToken = request.cookies.get('refresh_token')?.value
  const session = request.cookies.get('session')?.value

  if (protectedRouters.includes(request.nextUrl.pathname)) {
    const redirectURL = new URL('/auth/signout', request.url)
    redirectURL.searchParams.set('callback', request.nextUrl.pathname.replace('/', ''))

    if (!accessToken && !refreshToken && !session) {
      return NextResponse.redirect(redirectURL);
    }

    const res = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    if (res.status == 403 || res.status == 401) {
      return NextResponse.redirect(redirectURL);
    }
  }

  if (accessToken && refreshToken && !session) {
    const resRefresh = await fetch('http://localhost:3001/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    if (resRefresh.ok && resRefresh.status === 201) {
      const { user, tokens } = await resRefresh.json()

      if (tokens.access_token && tokens.refresh_token) {
        const res = NextResponse.next()

        const userSession = {
          id: user.id ?? '',
          name: user.name ?? '',
          email: user.email ?? '',
        }

        res.cookies.set({
          name: 'session',
          value: JSON.stringify(userSession),
          maxAge: tokens.expires,
          secure: true,
        })

        res.cookies.set({
          name: 'access_token',
          value: tokens.access_token,
          httpOnly: true,
          secure: true,
          path: '/',
        })

        res.cookies.set({
          name: 'refresh_token',
          value: tokens.refresh_token,
          httpOnly: true,
          secure: true,
          path: '/',
        })

        console.log('refresh middle')

        return res
      }
    } else if (resRefresh.status === 403 || resRefresh.status === 401) {
      return NextResponse.redirect(new URL('/auth/signout', request.url))
    }
  }

  return
}

export async function logoutSession() {
  const res = NextResponse.next()

  res.cookies.delete('session')
  res.cookies.delete('access_token')
  res.cookies.delete('refresh_token')

  return res
}
