import React from 'react'
import FormSignup from '@/components/sign/form-signup'
import SignOptionsForms from '@/components/sign/sign-options-forms'

export default function Signup() {
  return (
    <>
      <FormSignup className="lg:hidden" />
      <SignOptionsForms searchParams={{ callback: undefined }} />
    </>
  )
}
