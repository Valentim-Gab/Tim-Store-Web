import React, { useContext } from 'react'
import { Login } from '@/interfaces/Login'
import { AuthContext } from '@/contexts/auth-context'
import { destroyCookie } from 'nookies'
import { cookies } from 'next/headers'
// import { setCookie } from 'nookies'

import { parseCookies } from 'nookies'
import { getApiClient } from '../axios'
import { redirect } from 'next/navigation'

export default function Login() {
  //const { signIn } = useContext(AuthContext)

  //destroyCookie(ctx, 'access_token')

  // async function handleSignIn(formData: FormData) {
  //   const username = formData.get('email')?.toString()
  //   const password = formData.get('password')?.toString()

  //   if (username && password)
  //     await signIn({username, password})
  // }

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

      cookies().set('access_token', data.tokens.access_token, {
        maxAge: 60 * 60 * 24 * 7, //1 semana
        httpOnly: true,
        secure: true,
      })

      cookies().set('refresh_token', data.tokens.refresh_token, {
        maxAge: 60 * 60 * 24 * 7, //1 semana
        httpOnly: true,
        secure: true,
      })

      const res2 = await fetch('http://localhost:3001/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        cache: 'no-cache'
      })

      //const axios = getApiClient()

      // axios.post('/login', login)

      //console.log(res.status)

      // const { tokens } = await res.json()

      // cookies().set('access_token', tokens.access_token, {
      //   maxAge: 60 * 60 * 24 * 7 //1 semana
      // })
      // cookies().set('refresh_token', tokens.refresh_token, {
      //   maxAge: 60 * 60 * 24 * 7 //1 semana
      // })

      // setCookie(undefined, 'access_token', tokens.access_token, {
      //   maxAge: 60 * 60 * 24 * 7, //1 semana
      // })
      // setCookie(undefined, 'refresh_token', tokens.refresh_token, {
      //   maxAge: 60 * 60 * 24 * 7, //1 semana
      // })

      // console.log(res.headers

      //axios.get('/test')

      // const cookiesAfterLogin = parseCookies();
      // console.log(cookiesAfterLogin);

      // const res2 = await fetch('http://localhost:3001/test', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   credentials: 'include'
      // })

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

