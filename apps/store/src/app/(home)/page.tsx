
import React from 'react'
import { api } from '../api'
import { destroyCookie } from 'nookies'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { FetchAuth } from './feth'



export default async function Home() {
  const res = await FetchAuth('http://localhost:3001/user/admin', 'GET')

  console.log(await res.json())

  // try {
  //   api.get('/user/admin').catch(() => {
  //     console.error("Ocorreu um erro")
  //     destroyCookie(undefined, 'access_token')
  //   })

  //   //console.log(res.data)
  // } catch (err) {

  // }

  return <main className="min-h-screen p-8">salve</main>
}
