'use client'

import React from 'react'
import { redirect, useRouter } from 'next/navigation'

export default function Posty() {
  const router = useRouter()

  async function action(event: React.FormEvent) { 
    event.preventDefault()

    const res = await fetch('http://localhost:3001/testy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    })

    console.log(res.statusText)

    if (res.status == 403) {
      const res = await fetch('http://localhost:3001/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      const data = await res.json()

      console.log(data)

      if (res.ok && res.status === 201) {
        await action(event)
      } else if (res.status === 403 || res.status === 401) {
        router.push('/logout')
      }
    } else if (res.status == 401) {
      router.push('/logout')
    }
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
      <form onSubmit={action} className="flex flex-col gap-4">
        <button type="submit" className="border p-4">
          Teste
        </button>
      </form>
    </main>
  )
}
