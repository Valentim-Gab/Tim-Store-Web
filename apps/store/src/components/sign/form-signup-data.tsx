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
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import { InputMain } from '../inputs/input-main'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

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
  date_birth: z
    .date({
      errorMap: (error) => {
        return { message: 'Data inválida' }
      },
    })
    .min(new Date('1900-01-01'), { message: 'Data inválida' })
    .max(new Date(), { message: 'Data inválida' }),
  phone_number: z
    .string()
    .min(1, { message: 'Obrigatório' })
    .min(8, { message: 'Telefone inválido' })
    .min(10, { message: 'Verifique o DDD' })
    .transform((phone_number) => phone_number.replace('_', '')),
  gender: z.coerce.number().min(0, { message: 'Selecione o seu gênero' }),
})

interface FormSignupProps {
  className?: string
  email?: string
}

export default function FormSignupData({ className, email }: FormSignupProps) {
  const pathname = usePathname()
  const [formStep, setFormStep] = useState(1)
  const formItems = [1, 2]

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
      date_birth: undefined,
      phone_number: '',
      gender: -1,
    },
  })

  function onSubmitForm1(values: z.infer<typeof formSchema1>) {
    console.log(values)

    setFormStep(2)
    scrollTo(0, 0)

    return
  }

  function onSubmitForm2(values: z.infer<typeof formSchema2>) {
    console.log(values)

    setFormStep(3)
    scrollTo(0, 0)

    return
  }

  function getForm1() {
    return (
      <Form {...form1}>
        <h1 className="text-center text-sm font-medium">
          Informações de Login
        </h1>
        <form
          onSubmit={form1.handleSubmit(onSubmitForm1)}
          data-path={pathname}
          className={twMerge(
            'flex flex-col gap-4 p-4 bg-card rounded-b',
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
                      id={field.name}
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
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
                      id={field.name}
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
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
                      id={field.name}
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
                      styleLabel="primary"
                    >
                      Email
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
                      id={field.name}
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
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
                      id={field.name}
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
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
    )
  }

  function getForm2() {
    return (
      <Form {...form2}>
        <h1 className="text-center text-sm font-medium">
          Informações do Usuário
        </h1>
        <form
          onSubmit={form2.handleSubmit(onSubmitForm2)}
          data-path={pathname}
          className={twMerge(
            'flex flex-col gap-4 p-4 bg-card rounded-b',
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
                      autoComplete="new-password"
                      mask="___.___.___-__"
                      replacement={{ _: /\d/ }}
                      styleLabel="primary"
                      id={field.name}
                      inputMode='numeric'
                    />
                    <InputMain.Label
                      value={field.value}
                      htmlFor={field.name}
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
          <FormField
            control={form2.control}
            name="date_birth"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain.Root>
                    <InputMain.Date
                      field={field}
                      styleLabel="primary"
                      autoComplete="bday"
                      label={
                        <InputMain.Label
                          value={field.value?.toString() ?? ''}
                          htmlFor={field.name}
                          styleLabel="primary"
                        >
                          Data de nascimento
                        </InputMain.Label>
                      }
                    />
                  </InputMain.Root>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form2.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain.Root>
                    {/* <InputMain.InputMask
                      {...field}
                      type="text"
                      autoComplete="tel"
                      styleLabel="primary"
                      id={field.name}
                      mask="(__) _ ____-____"
                      replacement={{ _: /\d/ }}
                      showMaskOnFocus={true}
                      inputMode='tel'
                      modify={(input: string) => {
                        if (input.length == 10) {
                          return {
                            mask: '(__) ____-_____',
                            replacement: { _: /\d/ },
                          }
                        }

                        return {
                          mask: '(__) _ ____-____',
                          replacement: { _: /\d/ },
                        }
                      }}
                    /> */}
                    <InputMain.Input
                      {...field}
                      type="tel"
                      autoComplete="tel"
                      styleLabel="primary"
                      id={field.name}
              
                    />
                    <InputMain.Label
                      htmlFor={field.name}
                      value={field.value}
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
          <FormField
            control={form2.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMain.Root>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Gênero</p>
                      <RadioGroup
                        className="flex flex-wrap"
                        onValueChange={field.onChange}
                        name={field.name}
                        id={field.name}
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="0" id="r1" />
                          <Label htmlFor="r1">Masculino</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="1" id="r2" />
                          <Label htmlFor="r2">Feminino</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="2" id="r3" />
                          <Label htmlFor="r3">Outro</Label>
                        </div>
                      </RadioGroup>
                    </div>
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
    )
  }

  return (
    <div className="flex flex-col gap-4 bg-card rounded shadow">
      <div className="flex items-center justify-center p-4">
        {formItems.map((item) => (
          <span className="flex items-center justify-center" key={item}>
            <span
              data-active={item == formStep}
              data-checked={item <= formStep}
              className="w-[12px] h-[12px] rounded-full bg-muted-foreground transition-all duration-300 ease-in-out data-[active=true]:w-[16px] data-[active=true]:h-[16px] data-[checked=true]:bg-primary"
            ></span>
            <hr
              data-active={item < formStep}
              className="w-[70px] border-muted-foreground transition-all duration-300 ease-in-out data-[active=true]:border-[2px] data-[active=true]:border-primary origin-left"
            />
          </span>
        ))}
        <span
          data-active={formStep == 3}
          className="flex items-center justify-center p-1 border border-muted-foreground rounded-full transition-all duration-300 ease-in-out data-[active=true]:border-[2px] data-[active=true]:border-primary"
        >
          <i
            data-active={formStep == 3}
            className="icon-[solar--flag-2-bold] w-[22px] h-[22px] text-muted-foreground transition-all duration-300 ease-in-out data-[active=true]:text-primary data-[active=true]:w-[30px] data-[active=true]:h-[30px]"
          ></i>
        </span>
      </div>
      {formStep == 1 ? getForm1() : null}
      {formStep == 2 ? getForm2() : null}
      {formStep == 3 ? (
        <div className="p-4">
          <h2>Confirmado!</h2>
        </div>
      ) : null}
    </div>
  )
}
