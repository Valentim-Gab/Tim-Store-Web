import ButtonMain from '@/components/buttons/button-main'
import React from 'react'
import FormLogin from './form-login'
import FormSignup from './form-signup'

export default function SignOptionsForms({
  searchParams,
}: {
  searchParams: { callbackUrl?: string }
}) {
  return (
    <section className="hidden flex-col items-center gap-16 lg:flex">
      <div className="hidden justify-center self-stretch gap-16 lg:flex 2xl:gap-32">
        <div className="flex flex-col items-center bg-card rounded h-fit shadow">
          <span className="p-4">
            <h2 className="text-xl font-medium">Acessar</h2>
          </span>
          <FormLogin redirectUrl={searchParams.callbackUrl ?? '/'} />
        </div>
        <span className="w-[1px] bg-primary"></span>
        <div className="flex flex-col items-center h-fit bg-card rounded shadow">
          <span className="p-4">
            <h2 className="text-xl font-medium">Criar conta</h2>
          </span>
          <FormSignup />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 sel self-stretch">
        <h3>Facilite seu Login utilizando outras opções</h3>
        <ButtonMain
          variant="google"
          className="border-none shadow px-16"
        ></ButtonMain>
      </div>
    </section>
  )
}
