'use client'

import { useRouter } from "next/navigation"
import { destroyCookie } from "nookies"
import { useEffect } from "react"

interface LogoutProps {
  searchParams: {
    callback?: string
  }
}

export default function Logout({ searchParams }: LogoutProps) {
  destroyCookie(null, 'session')

  const url = searchParams.callback
    ? `/login?callback=${searchParams.callback}`
    : '/login'


  if (typeof window !== 'undefined')
    window.location.href = url

  return (
    <div>
      <h1>Saindo...</h1>
    </div>
  )
}
