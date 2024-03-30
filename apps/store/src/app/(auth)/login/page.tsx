import React from 'react'
import FormLogin from '@/components/sign/form-login'
import SignOptionsForms from '@/components/sign/sign-options-forms'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FormSignup from '@/components/sign/form-signup'
import { twMerge } from 'tailwind-merge'

interface LoginProps {
  searchParams: {
    callbackUrl?: string
    error?: string
  }
}

export default function Login({ searchParams }: LoginProps) {
  const classNameTab =
    'flex items-center justify-center p-4 text-sm font-medium w-full rounded-t rounded-b-none ease-in duration-200'

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-8 lg:py-16">
      <Tabs defaultValue="login" className="w-full lg:hidden">
        <TabsList className="flex bg-transparent rounded-none p-0">
          <TabsTrigger
            value="login"
            className={twMerge(
              classNameTab,
              'data-[state=active]:bg-card data-[state=active]:shadow-[-1px_-2px_3px_0_rgba(0,0,0,0.08)]'
            )}
          >
            Acessar
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className={twMerge(
              classNameTab,
              'data-[state=active]:bg-card data-[state=active]:shadow-[1px_-2px_3px_0_rgba(0,0,0,0.08)]'
            )}
          >
            Criar conta
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-0">
          <FormLogin
            redirectUrl={searchParams.callbackUrl ?? '/'}
            className="rounded-tr"
          />
        </TabsContent>
        <TabsContent value="register" className="mt-0">
          <FormSignup className="rounded-tl" />
        </TabsContent>
      </Tabs>
      <SignOptionsForms searchParams={searchParams} />
    </main>
  )
}
