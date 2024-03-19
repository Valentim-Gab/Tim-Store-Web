'use client'

import React from 'react'
import ButtonMain from '@/components/buttons/button-main'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Login } from '@/interfaces/Login'
import { twMerge } from 'tailwind-merge'
import { setCookie } from 'nookies'
import { InputMain } from '../inputs/input-main'

const formSchema = z.object({
  username: z.string().email({ message: 'Email é inválido' }),
  password: z.string(),
})

interface FormLoginProps {
  redirectUrl: string
  className?: string
}

export default function FormLogin({ redirectUrl, className }: FormLoginProps) {
  const pathname = usePathname()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.username && values.password) {
      const login: Login = {
        username: values.username.toString() ?? '',
        password: values.password.toString() ?? '',
      }

      const res = await fetch('http://localhost:3001/login', {
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
        setCookie(null, 'session', JSON.stringify(data.user), {
          maxAge: data.tokens.expires,
          ///secure: true, //TODO: Verificar utilização de SECURE em PROD
        })
      }

      router.push(redirectUrl)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        data-path={pathname}
        className={twMerge(
          "flex flex-col gap-4 px-4 py-8 bg-card shadow rounded-b data-[path='/auth/signin']:rounded-tr data-[path='/auth/signup']:rounded-tl lg:w-[400px] lg:rounded lg:py-4 lg:shadow-none",
          className
        )}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputMain.Root>
                  <InputMain.Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    styleLabel="primary"
                  />
                  <InputMain.Label value={field.value} styleLabel="primary">
                    Email
                  </InputMain.Label>
                </InputMain.Root>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputMain.Root>
                  <InputMain.Input
                    {...field}
                    type="password"
                    autoComplete="current-password"
                    styleLabel="primary"
                  />
                  <InputMain.Label value={field.value} styleLabel="primary">
                    Senha
                  </InputMain.Label>
                </InputMain.Root>
              </FormControl>
              <FormMessage />
              <div className="flex flex-col items-end w-full">
                <Link
                  href={'#'}
                  className="text-xs font-light underline lg:text-sm"
                >
                  Esqueci minha senha
                </Link>
              </div>
            </FormItem>
          )}
        />
        <div className="flex items-center flex-col gap-4">
          <ButtonMain type="submit" className="w-full">
            <i className="icon-[solar--login-3-bold] w-[24px] h-[24px]"></i>
            Entrar
          </ButtonMain>
          <ButtonMain
            type="button"
            stylized={'google'}
            className="w-full lg:hidden"
          />
        </div>
      </form>
    </Form>
  )
}
