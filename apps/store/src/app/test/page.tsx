import React from 'react'
import { cookies } from 'next/headers'
import { Login } from '@/interfaces/Login'

export default function Test() {
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

      const json = await res.json()

      cookies().set('access_token', json.tokens.access_token)
      cookies().set('refresh_token', json.tokens.refresh_token)

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

