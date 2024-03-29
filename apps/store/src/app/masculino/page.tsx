import fetchAuthServer from '@/auth/fetch-auth-server'
import React from 'react'

export default async function Masculino() {
  const data = await fetchAuthServer({ url: 'http://localhost:3001/test', cache: 'no-store' })

  console.log(data)

  return <div>{JSON.stringify(data)}</div>
}
