'use client'

import React, { useState } from 'react'
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
import InputMain from '../inputs/input-main'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

const formSchema1 = z
  .object({
    name: z.string().min(1, { message: 'Obrigatório*' }),
    last_name: z.string().min(1, { message: 'Obrigatório*' }),
    email: z
      .string()
      .min(1, { message: 'Obrigatório' })
      .email({ message: 'Email inválido' })
      .toLowerCase(),
    password: z.string().min(6, { message: 'Mínimo de 6 caracteres' }),
    password_confirmation: z
      .string()
      .min(6, { message: 'Mínimo de 6 caracteres' }),
  })
  .refine((data) => data.password == data.password_confirmation, {
    message: 'As senhas não coincidem',
    path: ['password_confirmation'],
  })

const formSchema2 = z.object({
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF inválido' }),
  //cnpj: z.string().length(14, { message: 'CNPJ deve ter 14 caracteres' }),
  //date_birth: z.date(),
  phone_number: z
    .string()
    .length(11, { message: 'Telefone deve ter 11 caracteres' }),
  //gender: z.number(),
})

interface FormSignupProps {
  className?: string
  email?: string
}

export default function FormSignupData({ className, email }: FormSignupProps) {
  const pathname = usePathname()
  const router = useRouter()

  const form1 = useForm<z.infer<typeof formSchema1>>({
    resolver: zodResolver(formSchema1),
    defaultValues: {
      name: '',
      last_name: '',
      email: email ?? '',
      password: '',
      password_confirmation: '',
    },
  })

  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: {
      cpf: '',
      //cnpj: '',
      //date_birth: new Date(),
      phone_number: '',
    },
  })

  const { errors } = form1.formState

  function onSubmitForm1(values: z.infer<typeof formSchema1>) {
    console.log(values)

    if (true) {
      return
    }
  }

  function onSubmitForm2(values: z.infer<typeof formSchema2>) {
    console.log(values)
  }

  return (
    <div className="flex flex-col gap-8">
      <Form {...form1}>
        <form
          onSubmit={form1.handleSubmit(onSubmitForm1)}
          data-path={pathname}
          className={twMerge(
            "flex flex-col gap-4 px-4 py-8 bg-card shadow rounded-b data-[path='/login']:rounded-tr data-[path='/login/signup']:rounded-tl lg:w-[400px] lg-rounded lg:py-4 lg:data-[path='/login/signup']:rounded-tl-none lg:shadow-none",
            className
          )}
        >
          <FormField
            control={form1.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="text"
                    autoComplete="name"
                    placeholder="Nome"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form1.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="text"
                    autoComplete="family-name"
                    placeholder="Sobrenome"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form1.control}
            name="email"
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
            control={form1.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form1.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirme a senha"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center flex-col gap-4">
            <ButtonMain type="submit" className="w-full gap-1">
              <i className="icon-[solar--alt-arrow-right-bold-duotone] w-[24px] h-[24px]"></i>
              Prosseguir
            </ButtonMain>
          </div>
        </form>
      </Form>

      <Form {...form2}>
        <form
          onSubmit={form2.handleSubmit(onSubmitForm2)}
          data-path={pathname}
          className={twMerge(
            "flex flex-col gap-4 px-4 py-8 bg-card shadow rounded-b data-[path='/login']:rounded-tr data-[path='/login/signup']:rounded-tl lg:w-[400px] lg-rounded lg:py-4 lg:data-[path='/login/signup']:rounded-tl-none lg:shadow-none",
            className
          )}
        >
          <FormField
            control={form2.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="text"
                    autoComplete="cpf"
                    placeholder="CPF"
                    mask={{
                      maskPattern: '___.___.___-__',
                      replacement: { _: /\d/ },
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form2.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="text"
                    autoComplete="cnpj"
                    placeholder="CNPJ"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form2.control}
            name="date_birth"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="date"
                    autoComplete="bday"
                    placeholder="Data de nascimento"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form2.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain
                    {...field}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Telefone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center flex-col gap-4">
            <ButtonMain type="submit" className="w-full gap-1">
              <i className="icon-[solar--alt-arrow-right-bold-duotone] w-[24px] h-[24px]"></i>
              Prosseguir
            </ButtonMain>
          </div>
        </form>
      </Form>
    </div>
  )
}
