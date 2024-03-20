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
      router.push('/login')
    }

    return () => clearInterval(interval)
  }, [router, seconds])

  return (
    <div className="flex flex-col items-center self-stretch gap-4 pt-8 pb-16 px-4 lg:gap-6 lg:pb-24">
      <span className="icon-checked-custom text-primary w-[100px] h-[100px] lg:w-[148px] lg:h-[148px]"></span>
      <h2 className="text-primary font-semibold text-xl lg:text-3xl">
        Cadastro Realizado!
      </h2>
      <p className="text-center text-sm lg:text-lg">
        Você será redirecionado em
        <br />
        {seconds} segundos
      </p>
    </div>
  )
}
