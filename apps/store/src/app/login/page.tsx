import React from 'react'
import { Login } from '@/interfaces/Login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Login() {
  async function handleSignIn(formData: FormData) {
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
        body: JSON.stringify(login),
        credentials: 'include'
      })

      const data = await res.json()

      console.log(data)

      cookies().set('access_token', data.tokens.access_token, {
        maxAge: 60 * 60 * 24 * 7, //1 semana
        httpOnly: true,
        secure: true,
      })

      redirect('/')
    }
  }

  return (
    <main className="min-h-screen p-8">
      <form action={handleSignIn} className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" className="text-black" />
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" className="text-black" />
        <button type="submit" className="border p-4">Login</button>
      </form>
    </main>
  )
}

