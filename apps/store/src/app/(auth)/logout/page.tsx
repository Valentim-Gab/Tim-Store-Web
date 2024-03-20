'use client'

import { useRouter } from 'next/navigation'

interface LogoutProps {
  searchParams: {
    callback?: string
  }
}

export default function Logout({ searchParams }: LogoutProps) {
  const router = useRouter()

  const url = searchParams.callback
    ? `/login?callback=${searchParams.callback}`
    : '/login'

  router.push(url)
}
