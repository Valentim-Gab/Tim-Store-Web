import { cookies } from 'next/headers'
import { FetchAuth } from './fetch-auth'

export default async function FetchAuthServer({
  url,
  method,
  body,
  token,
  cache,
}: FetchAuth) {
  const accessToken = token ?? cookies().get('access_token')?.value ?? ''

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

  const data = await res.json()

  if (res.status === 403) {
    return null
  }

  return data
}
