import React from 'react'
import SignOptionsForms from '../../../components/sign/sign-options-forms'
import FormLogin from '@/components/sign/form-login'

interface LoginProps {
  searchParams: {
    callback?: string
  }
}

export default function Login({ searchParams }: LoginProps) {
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
    <>
      <FormLogin
        redirectUrl={searchParams.callback ?? '/'}
        className="lg:hidden"
      />
      <SignOptionsForms searchParams={searchParams} />
    </>
  )
}
