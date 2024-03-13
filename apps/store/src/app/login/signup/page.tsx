import React from 'react'
import FormSignup from '@/components/sign/form-signup'
import SignOptionsForms from '@/components/sign/sign-options-forms'

export default function Signup() {
  return (
    // <section className="flex-col items-center h-fit lg:flex">
    //   <span className="hidden p-4 bg-white shadow rounded-t text-center w-[400px] lg:block">
    //     <h2 className="text-xl font-medium">Criar conta</h2>
    //   </span>
    //   <FormSignup />
    // </section>

    <>
      <FormSignup className="lg:hidden" />
      <SignOptionsForms searchParams={{ callback: undefined }} />
    </>
  )
}
