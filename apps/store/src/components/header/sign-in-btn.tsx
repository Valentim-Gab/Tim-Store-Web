'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'

export default function SignInBtn() {
  const [sessionData, setSessionData] = useState<any>(null)
  const [currentRoute, setCurrentRoute] = useState('')
  const [loading, setLoading] = useState(true)
  const { session } = parseCookies()
  const path = usePathname()

  useEffect(() => {
    setLoading(true)

    if (session) {
      try {
        if (!sessionData || sessionData.name != JSON.parse(session).name)
          setSessionData(JSON.parse(session))
      } catch (error) {
        setSessionData(null)
      }
    } else if (path != currentRoute) {
      setSessionData(null)
    }

    setLoading(false)
  }, [session, sessionData, currentRoute, path])

  useEffect(() => {
    setCurrentRoute(path)
  }, [path])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (sessionData) {
    return <Link href={'/logout'}>{sessionData.name}</Link>
  }

  return (
    <Link
      href={'/login'}
      className="flex justify-center items-center gap-2 p-4 font-bold rounded"
    >
      <i className="icon-[solar--login-3-bold] w-6 h-6"></i>
      Entrar
    </Link>
  )
}