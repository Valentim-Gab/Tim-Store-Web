import CardProductRoot from '@/components/cards/card-product/card-product-root'
import { Carousel } from '@/components/carousel'
import React from 'react'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center container min-h-screen py-4">
      <div className="flex items-center justify-center">
        <Carousel.Root></Carousel.Root>
      </div>
      <h2>Últimos itens adicionados</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
        <CardProductRoot />
      </div>
    </main>
  )
}
