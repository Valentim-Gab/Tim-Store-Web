'use client'

import React, { useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { FetchAuth } from '@/auth/fetch-auth'
import fetchAuthClient from '@/auth/fetch-auth-client'

export default function Posty() {
  const router = useRouter()

  function Action(event: React.FormEvent) {
    event.preventDefault()

    fetchAuthClient({
      url: 'http://localhost:3001/testy',
      method: 'POST',
    })
      .then((data: any) => {
        console.log(data)
      })
      .catch((err: any) => {
        console.error(err)
      })
  }

  // function action(event: React.FormEvent) {
  //   event.preventDefault()

  //   const { access_token } = parseCookies(ctx) ?? ''

  //   console.log(access_token)

  //   fetch('http://localhost:3001/test', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${access_token}`,
  //     },
  //     credentials: 'include',
  //   }).then((res) => {
  //     console.log(res.status)
  //   })
  //  }

  return (
    <main className="min-h-screen p-8">
      <form onSubmit={Action} className="flex flex-col gap-4">
        <button type="submit" className="border p-4">
          Teste
        </button>
      </form>
    </main>
  )
}
