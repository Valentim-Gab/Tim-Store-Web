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

const formSchema = z.object({
  username: z.string().email({ message: 'Email é inválido' }),
})

interface FormSignupProps {
  className?: string
}

export default function FormSignup({ className }: FormSignupProps) {
  const pathname = usePathname()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    if (values.username) {
      router.push(`/register?email=${values.username}`)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        data-path={pathname}
        className={twMerge(
          "flex flex-col gap-4 px-4 py-8 bg-card shadow rounded-b data-[path='/auth/signin']:rounded-tr data-[path='/auth/signup']:rounded-tl lg:w-[400px] lg-rounded lg:py-4 lg:data-[path='/auth/signup']:rounded-tl-none lg:shadow-none",
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
        <div className="flex items-center flex-col gap-4">
          <ButtonMain type="submit" className="w-full gap-1">
            <i className="icon-[solar--alt-arrow-right-bold-duotone] w-[24px] h-[24px]"></i>
            Continuar cadastro
          </ButtonMain>
          <ButtonMain
            type="button"
            variant={'google'}
            className="w-full lg:hidden"
          />
        </div>
      </form>
    </Form>
  )
}
