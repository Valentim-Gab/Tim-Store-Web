'use client'

import React, { useEffect, useState } from 'react'
import './sign.scss'
import { useRouter } from 'next/navigation'

export default function SignupConfirmed() {
  const [seconds, setSeconds] = useState(4)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    if (seconds === 0) {
      clearInterval(interval)
      router.push('/auth/signin')
    }

    return () => clearInterval(interval)
  }, [router, seconds])

  return (
    <div className="flex flex-col items-center self-stretch gap-4 py-8 px-4">
      <span className="icon-checked-custom text-primary"></span>
      <h2 className="text-primary font-semibold text-lg">
        Cadastro Realizado!
      </h2>
      <p className="text-center">
        Você será redirecionado em
        <br />
        {seconds} segundos
      </p>
    </div>
  )
}
