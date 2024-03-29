import { cookies } from 'next/headers'
import { FetchAuth } from './fetch-auth'
import { redirect } from 'next/navigation'

export default async function fetchAuthServer({
  url,
  method,
  body,
  token,
  refresh_token,
  cache,
}: FetchAuth) {
  const accessToken = token ?? cookies().get('access_token')?.value ?? ''
  const refreshToken = refresh_token ?? cookies().get('refresh_token')?.value ?? ''

  const res = await fetch(url, {
    method: method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
    credentials: 'include',
    cache: cache,
  })

  console.log(res.status)

  let dataMain = await res.json()

  if (res.status === 403) {
    // const res = await fetch('http://localhost:3001/refresh', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   body: JSON.stringify({ refresh_token: refreshToken }),
    // })

    // if (res.status === 403 || res.status === 401) {
    //   redirect('/logout') 
    // }

    // const data = await res.json()

    // const tokens = {
    //   access_token: data.tokens.access_token,
    //   refresh_token: data.tokens.refresh_token,
    // }

    // dataMain = await fetchAuthServer({
    //   url,
    //   method,
    //   body,
    //   token: tokens.access_token,
    //   refresh_token: tokens.refresh_token,
    //   cache,
    // })

    redirect('/logout')
  }

  return dataMain
}
