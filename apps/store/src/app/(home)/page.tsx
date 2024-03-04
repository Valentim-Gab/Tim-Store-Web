import { CardProduct } from '@/components/cards/card-product'
import { Carousel } from '@/components/carousel'
import { Product } from '@/interfaces/Product'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 150,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1173615976525336646/1173617768600444978/20231004_083920.jpg?ex=65ef0938&is=65dc9438&hm=b42014c87df2937176f03c0a2c4d858510c5d3793bd019d2a816b858535fb74a&',
    },
    {
      id: '2',
      name: 'Product Product Product',
      price: 250,
      condition: 'Usado',
      image:
        'https://cdn.discordapp.com/attachments/1173615976525336646/1173617768600444978/20231004_083920.jpg?ex=65ef0938&is=65dc9438&hm=b42014c87df2937176f03c0a2c4d858510c5d3793bd019d2a816b858535fb74a&',
    },
    {
      id: '3',
      name: 'Product Product',
      price: 350,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1173615976525336646/1173617768600444978/20231004_083920.jpg?ex=65ef0938&is=65dc9438&hm=b42014c87df2937176f03c0a2c4d858510c5d3793bd019d2a816b858535fb74a&',
    },
    {
      id: '5',
      name: 'Pro',
      price: 550,
      image:
        'https://cdn.discordapp.com/attachments/1173615976525336646/1173617768600444978/20231004_083920.jpg?ex=65ef0938&is=65dc9438&hm=b42014c87df2937176f03c0a2c4d858510c5d3793bd019d2a816b858535fb74a&',
    },
    {
      id: '4',
      name: 'Product 4',
      price: 450,
      condition: 'Usado',
      image: 'https://via.placeholder.com/150',
    },
  ]

  const dailyOffer: Product = {
    id: '6',
    name: 'Product 6',
    price: 650,
    condition: 'Novo',
    image:
      'https://cdn.discordapp.com/attachments/1173615976525336646/1173617768600444978/20231004_083920.jpg?ex=65ef0938&is=65dc9438&hm=b42014c87df2937176f03c0a2c4d858510c5d3793bd019d2a816b858535fb74a&',
  }

  return (
    <main className="flex flex-col gap-8 items-center container min-h-screen py-8">
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-start">
        <Carousel.Root></Carousel.Root>
        <Link
          href={'#'}
          className="flex flex-col gap-4 items-center p-4 bg-card min-w-[240px] max-w-[440px] w-full rounded-lg shadow sm:px-8 lg:w-[240px] 2xl:w-fit 2xl:px-16"
        >
          <h2 className="text-sm sm:text-base">Oferta do dia</h2>
          <CardProduct.Root key={dailyOffer.id} className="shadow-none">
            <CardProduct.Image src={dailyOffer.image ?? ''} />
            <CardProduct.Data>
              <CardProduct.Title>{dailyOffer.name}</CardProduct.Title>
              <CardProduct.Price value={dailyOffer.price}></CardProduct.Price>
            </CardProduct.Data>
          </CardProduct.Root>
        </Link>
      </div>
      <h2>Últimos itens adicionados</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {products &&
          products.map((product) => (
            <CardProduct.Root key={product.id}>
              <CardProduct.Image src={product.image ?? ''} />
              <CardProduct.Data>
                <CardProduct.Title>{product.name}</CardProduct.Title>
                {product.condition && (
                  <CardProduct.Condition>
                    {product.condition}
                  </CardProduct.Condition>
                )}
                <div className="flex flex-col w-full items-center gap-3 2xl:flex-row 2xl:justify-between">
                  <CardProduct.Price value={product.price}></CardProduct.Price>
                  <CardProduct.Btn href={'#'}>Comprar</CardProduct.Btn>
                </div>
              </CardProduct.Data>
            </CardProduct.Root>
          ))}
      </div>
    </main>
  )
}
