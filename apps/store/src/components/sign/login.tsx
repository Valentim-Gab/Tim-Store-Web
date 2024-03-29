'use server'

import { z } from 'zod'
import { formSchema } from './form-login'
import { Login } from '@/interfaces/Login'
import { Env } from '@/environment/Env'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login(
  values: z.infer<typeof formSchema>,
  redirectUrl: string
) {
  if (values.username && values.password) {
    const login: Login = {
      username: values.username.toString() ?? '',
      password: values.password.toString() ?? '',
    }

    const res = await fetch(`${Env.API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok || res.status === 401) {
      console.error(data.message)

      return
    }

    if (res.ok && res.status === 201) {
      cookies().set('session', JSON.stringify(data.user), {
        maxAge: data.tokens.expires,
        secure: true,
      })

      cookies().set('access_token', data.tokens.access_token, {
        httpOnly: true,
      })

      // cookies().set('refresh_token', data.tokens.refresh_token)
    }

    redirect(redirectUrl)
  }
}
