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
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import { InputMain } from '../inputs/input-main'

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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="text"
                      autoComplete="username"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Nome
                    </InputMain.Label>
                  </InputMain.Root>
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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="text"
                      autoComplete="family-name"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Sobrenome
                    </InputMain.Label>
                  </InputMain.Root>
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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="email"
                      autoComplete="email"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Nome
                    </InputMain.Label>
                  </InputMain.Root>
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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="password"
                      autoComplete="new-password"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Senha
                    </InputMain.Label>
                  </InputMain.Root>
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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="password"
                      autoComplete="new-password"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Confirme a senha
                    </InputMain.Label>
                  </InputMain.Root>
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
                  <InputMain.Root>
                    <InputMain.InputMask
                      {...field}
                      type="text"
                      autoComplete="cpf"
                      mask="___.___.___-__"
                      replacement={{ _: /\d/ }}
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      CPF
                    </InputMain.Label>
                  </InputMain.Root>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                  <InputMain.Root>
                    <InputMain.Input
                      {...field}
                      type="tel"
                      autoComplete="tel"
                      styleLabel="primary"
                    />
                    <InputMain.Label
                      value={field.value}
                      name={field.name}
                      styleLabel="primary"
                    >
                      Celular
                    </InputMain.Label>
                  </InputMain.Root>
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
