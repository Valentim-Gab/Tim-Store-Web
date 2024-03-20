import React from 'react'
import FormLogin from '@/components/sign/form-login'
import SignOptionsForms from '@/components/sign/sign-options-forms'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FormSignup from '@/components/sign/form-signup'

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

  const classNameLogin =
  'flex items-center justify-center self-stretch p-4 text-sm font-medium w-full rounded-t rounded-b-none' +
  " data-[state=active]:bg-card data-[state=active]:shadow-[-1px_-2px_3px_0_rgba(0,0,0,0.08)]" +
  " ease-in duration-200"

  const classNameRegister =
  'flex items-center justify-center self-stretch p-4 text-sm font-medium w-full rounded-t rounded-b-none' +
  " data-[state=active]:bg-card " +
  " data-[state=active]:shadow-[1px_-2px_3px_0_rgba(0,0,0,0.08)] ease-in duration-200"

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-8 lg:py-16">
      <Tabs defaultValue="login" className='w-full lg:hidden'>
        <TabsList className="flex bg-transparent rounded-none p-0">
          <TabsTrigger value="login" className={classNameLogin}>Acessar</TabsTrigger>
          <TabsTrigger value="register" className={classNameRegister}>Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className='mt-0'>
          <FormLogin
            redirectUrl={searchParams.callback ?? '/'}
            className='rounded-tr'
          />
        </TabsContent>
        <TabsContent value="register" className='mt-0'>
          <FormSignup className='rounded-tl' />
        </TabsContent>
      </Tabs>
      <SignOptionsForms searchParams={searchParams} />
    </main>
  )
}
