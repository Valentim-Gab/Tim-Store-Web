'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SignInBtn() {
  const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession()
  const path = usePathname()

  useEffect(() => {
    if (status === 'loading') setLoading(true)
    else setLoading(false)
  }, [session, status])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (session && session.user) {
    return (
      <Link href={'/logout'} prefetch={false}>
        {session.user.name}
      </Link>
    )
  }

  return (
    <Link
      href={'/login'}
      data-active={path === '/login'}
      className="flex justify-center items-center gap-2 px-4 py-2 font-bold rounded data-[active=true]:bg-white data-[active=true]:text-primary"
    >
      <i className="icon-[solar--login-3-bold] w-6 h-6"></i>
      Entrar
    </Link>
  )
}
