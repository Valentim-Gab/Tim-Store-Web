import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Test() {
  const accessToken = cookies().get('access_token')?.value ?? ''

  const res = await fetch('http://localhost:3001/user', {
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    cache: 'no-cache',
  })

  const data = await res.json()

  console.log(data)

  return <div>Test</div>
}
