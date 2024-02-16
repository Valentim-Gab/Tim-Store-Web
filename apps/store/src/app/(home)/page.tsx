'use client'

import { Carousel } from '@/components/carousel'
import Product from '@/components/product/product'

import React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function Home() {
  // const api = getApiClient()
  // await api.get('/test')

  //console.log(cookies().get('access_token'))

  // const resRefresh = await fetch('http://localhost:3001/refresh', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${cookies().get('access_token')?.value}`,
  //   },
  //   body: JSON.stringify({
  //     refresh_token: cookies().get('refresh_token')?.value,
  //   }),
  // })

  //console.log(cookies().get('teste'))

  const { setTheme } = useTheme()

  return (
    <main className="container min-h-screen py-4">
      <div className="flex items-center justify-center">
        <Carousel.Root></Carousel.Root>
      </div>

      <Button className="dark:bg-green-700" onClick={() => setTheme('light')}>
        Light
      </Button>
      <Button onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button onClick={() => setTheme('system')}>
        System
      </Button>

      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>

      <Product />
    </main>
  )
}
