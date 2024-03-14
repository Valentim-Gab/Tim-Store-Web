import FormSignupData from '@/components/sign/form-signup-data'
import React from 'react'

interface SignUpDataProps {
  searchParams: {
    email?: string
  }
}

export default function SignUpData({ searchParams }: SignUpDataProps) {
  return (
    <main className="min-h-screen px-4 py-8">
      <FormSignupData email={searchParams.email} />
    </main>
  )
}
