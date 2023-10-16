"use client"

import { Login } from '@/interfaces/Login'
import React from 'react'

export default function Home() {
  function addToLocalStorage(key: string, value: string) {
    window.localStorage.setItem(key, value)
    console.log(window.localStorage.getItem('access_token'))
  }

  function login(formData: FormData) {
    if (formData.entries()) {
      const login: Login = {
        username: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? ''
      }

      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
      }).then((res) => res.json()).then((json) => {
        addToLocalStorage('access_token', json.tokens.access_token) 
      })
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
