'use client'

import React from 'react'
import ButtonMain from '@/components/buttons/button-main'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import InputMain from '../inputs/input-main'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const formSchema = z.object({
  username: z.string().email({ message: 'Email é inválido' }),
  password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
})

export default function FormLogin() {
  const pathname = usePathname()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        data-path={pathname}
        className="flex flex-col gap-4 px-4 py-8 bg-card shadow rounded-b data-[path='/login']:rounded-tr data-[path='/login/signup']:rounded-tl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputMain
                  {...field}
                  type="email"
                  autoComplete="username"
                  placeholder="Email"
                />
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
                <InputMain
                  {...field}
                  placeholder="Senha"
                  type="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormMessage />
              <div className="flex flex-col items-end w-full">
                <Link href={'#'} className="text-xs font-light underline">
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
          <ButtonMain type="button" stylized={'google'} className="w-full" />
        </div>
      </form>
    </Form>
  )
}
