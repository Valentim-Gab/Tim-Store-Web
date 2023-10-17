// 'use client'

import React, { useContext } from 'react'
import { Login } from '@/interfaces/Login'
import { AuthContext } from '@/contexts/auth-context'
import { cookies } from 'next/headers'
import { setCookie } from 'nookies'

export default function Login() {
  //const { signIn } = useContext(AuthContext)

  // async function handleSignIn(formData: FormData) {
  //   const username = formData.get('email')?.toString()
  //   const password = formData.get('password')?.toString()

  //   if (username && password)
  //     await signIn({username, password})
  // }

  async function login(formData: FormData) {
    'use server'

    if (formData.entries()) {
      const login: Login = {
        username: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? ''
      }

      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
      })

      const { tokens } = await res.json()

      cookies().set('access_token', tokens.access_token, {
        maxAge: 60 * 60 * 24 * 7 //1 semana
      })
      cookies().set('refresh_token', tokens.refresh_token, {
        maxAge: 60 * 60 * 24 * 7 //1 semana
      })

      // setCookie(undefined, 'access_token', tokens.access_token, {
      //   maxAge: 60 * 60 * 24 * 7, //1 semana
      // })
      // setCookie(undefined, 'refresh_token', tokens.refresh_token, {
      //   maxAge: 60 * 60 * 24 * 7, //1 semana
      // })

      console.log(cookies().get("access_token"))
    }
  }

  return (
    <main className="min-h-screen p-8">
      <form action={login} className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" className="text-black" />
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" className="text-black" />
        <button type="submit" className="border p-4">Login</button>
      </form>
    </main>
  )
}

