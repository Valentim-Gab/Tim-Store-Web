import { cookies } from 'next/headers'
import { parseCookies } from 'nookies'
import React from 'react'
import { FetchAuth } from '../(home)/feth'

export default function Posty(ctx: any) {
  async function action() {
    'use server'

    const data = await FetchAuth('http://localhost:3001/test', 'POST')

    console.log(data)
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
      <form action={action} className="flex flex-col gap-4">
        
        <button type="submit" className="border p-4">
          Teste
        </button>
      </form>
    </main>
  )
}
