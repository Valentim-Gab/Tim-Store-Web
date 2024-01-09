'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
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
    <div>Saindo...</div>
  )
}