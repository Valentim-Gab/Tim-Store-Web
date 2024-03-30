import fetchAuthServer from '@/auth/fetch-auth-server'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'
import { authOptions } from '@/auth/authOptions'

export default async function Masculino() {
  // const data = await fetchAuthServer({ url: 'http://localhost:3001/test', cache: 'no-store' })

  // console.log(data)

  const session = await getServerSession(authOptions)

  if (session) {
    const res = await fetch('http://localhost:3001/test', {
      headers: {
        Authorization: `Bearer ${session.tokens.access_token}`,
        'Content-Type': 'application/json'
      },
    })

    const data = await res.json()

    if (res.status === 403) {
      redirect('/logout?callback=masculino')
    }

    return <div>{JSON.stringify(data)}</div>
  }

  return <div>{'Sem data'}</div>
}
