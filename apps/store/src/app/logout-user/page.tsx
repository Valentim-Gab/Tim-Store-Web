'use client'

import React, { useEffect } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import { redirect, useRouter } from 'next/navigation'
import { NextPageContext } from 'next'
import { cookies } from 'next/headers'
import { handleLogout } from './actions'

export default function Logout(ctx: any) {
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3001/logout', {
      method: 'GET',
      credentials: 'include',
    }).then(() => {
      router.push('/login')
    })
  })

  return (
    <div>Logout</div>
  )
}