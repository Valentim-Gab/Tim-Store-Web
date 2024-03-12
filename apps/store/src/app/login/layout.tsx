import FormLogin from '@/components/forms/form-login'
import Link from 'next/link'
import { ReactNode } from 'react'
import Links from './links'

interface LoginProps {
  searchParams: {
    callback?: string
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // async function handleSignIn(formData: FormData) {
  //   'use server'

  //   if (formData.entries()) {
  //     const login: Login = {
  //       username: formData.get('email')?.toString() ?? '',
  //       password: formData.get('password')?.toString() ?? '',
  //     }

  //     const res = await fetch('http://localhost:3001/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(login),
  //       credentials: 'include',
  //     })

  //     const data = await res.json() //TODO: tratar login

  //     const user = {
  //       id: data.user.id ?? '',
  //       name: data.user.name ?? '',
  //       email: data.user.email ?? '',
  //     }

  //     cookies().set('session', JSON.stringify(user), {
  //       maxAge: data.tokens.expires,
  //       secure: true,
  //     })

  //     cookies().set('access_token', data.tokens.access_token, {
  //       httpOnly: true,
  //       secure: true,
  //     })

  //     cookies().set('refresh_token', data.tokens.refresh_token, {
  //       httpOnly: true,
  //       secure: true,
  //     })

  //     redirect(searchParams.callback ?? '/')
  //   }
  // }

  return (
    <main className="min-h-screen px-4 py-8">
      {/* <form action={handleSignIn} className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" className="text-black" />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-black"
        />
        <button type="submit" className="border p-4">
          Login
        </button> 
        <ButtonMain type="submit">
          <i className="icon-[solar--login-3-bold] w-[24px] h-[24px]"></i>
          Entrar
        </ButtonMain>
        <ButtonMain type="submit" stylized={'google'} />
  </form> */}

      <Links />
      {children}
    </main>
  )
}
