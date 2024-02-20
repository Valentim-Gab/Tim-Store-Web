import { cookies } from 'next/headers'
import React from 'react'

export default async function Test() {
  const accessToken = cookies().get('access_token')?.value

  console.log(accessToken)

  const res = await fetch('http://localhost:3001/user', {
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    cache: 'no-cache',
  })

  console.log(res.status)
  
  // const data = await res.json()

  // console.log(data.user)

  return <div>Test</div>
}
