import { FetchAuth } from './fetch-auth'

export default async function fetchAuthClient({
  url,
  method,
  body,
  token,
  cache,
}: FetchAuth): Promise<any> {
  try {
    const res = await fetch(url, {
      method: method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
      cache: cache,
    })

    if (res.status == 403) {
      // const res = await fetch('http://localhost:3001/refresh', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   credentials: 'include',
      // })

      // const data = await res.json()
      
      // const user = {
      //   id: data.user.id ?? '',
      //   name: data.user.name ?? '',
      //   email: data.user.email ?? '',
      // }

      // if (res.ok && res.status === 201) {
      //   setCookie(null, 'session', JSON.stringify(user), {
      //     maxAge: data.tokens.expires,
      //     secure: true,
      //   })

      //   return await fetchAuthClient({
      //     url,
      //     method,
      //     body,
      //     token,
      //     cache,
      //   })
      // } else if (res.status === 403 || res.status === 401) {
      //   throw new Error('Unauthorized')
      // }

      throw new Error('Unauthorized')
    } else if (res.status == 401) {
      throw new Error('Unauthorized')
    }

    const data = await res.json()

    return data
  } catch (error) {
    throw new Error('Unauthorized')
  }
}
