'use client'

import fetchAuthClient from '@/auth/fetch-auth-client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Feminino() {
  // const router = useRouter()

  // const { data: session, status } = useSession()

  // if (session && session.user) {
  //   if (new Date().getTime() > session.tokens.expires) {
  //     console.log('\n\n[JWT]: Token expirado')

  //     signOut()
  //   }
  // }

  async function getAuthClient() {
    // fetchAuthClient({ url: 'http://localhost:3001/test' })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     router.push('/logout')
    //   })
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Feminino</h1>
      <p>Esse é o conteúdo da página feminino</p>
      <button onClick={getAuthClient}>TESTE</button>
    </div>
  )
}
