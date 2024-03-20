import FormSignupData from '@/components/sign/form-signup-data'
import React from 'react'

interface SignUpDataProps {
  searchParams: {
    email?: string
  }
}

export default function Register({ searchParams }: SignUpDataProps) {
  return (
    <main className="flex flex-col items-center self-stretch min-h-screen px-4 py-8">
      <FormSignupData email={searchParams.email} />
    </main>
  )
}
