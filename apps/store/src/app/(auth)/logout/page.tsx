'use client'

import { signOut } from 'next-auth/react'
import './logout.scss'

interface LogoutProps {
  searchParams: {
    callback?: string
  }
}

export default function Logout({ searchParams }: LogoutProps) {
  const url = searchParams.callback
    ? `/login?callbackUrl=/${searchParams.callback}`
    : '/login?callbackUrl=/'

  setTimeout(() => {
    signOut()
      .then(() => {
        if (typeof window !== 'undefined') window.location.href = url
      })
      .catch(() => {})
  }, 2350)

  return (
    <main className="flex flex-col items-center min-h-screen gap-32 px-4 py-8 lg:py-16">
      <div className='flex flex-col items-center gap-4'>
      <h1 className='text-3xl font-bold'>Saindo...</h1>
      <h2 className='text-xl font-semibold'>Sua sessão foi encerrada, faça login novamente.</h2>
      </div>
      <div className="loader">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
    </main>
  )
}
