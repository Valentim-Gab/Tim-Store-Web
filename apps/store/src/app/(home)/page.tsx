import { CardAdBanner } from '@/components/cards/card-ad-banner'
import { CardProduct } from '@/components/cards/card-product'
import CarouselHome from '@/components/carousel-home/carousel-home'
import CarouselMini from '@/components/category/carousel-mini'
import CategoryMiniCard from '@/components/category/category-mini-card'
import { Product } from '@/interfaces/Product'
import Link from 'next/link'
import React from 'react'
import './home.scss'

export default function Home() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 150,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '2',
      name: 'Product Product Product',
      price: 250,
      condition: 'Usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '3',
      name: 'Product Product',
      price: 350,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '5',
      name: 'Pro',
      price: 550,
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '4',
      name: 'Product 4',
      price: 450,
      condition: 'Usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
  ]

  const dailyOffer: Product[] = [
    {
      id: '6',
      name: 'Product 6',
      price: 650,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '7',
      name: 'Product 7',
      price: 750,
      condition: 'Usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '8',
      name: 'Product 8',
      price: 850,
      condition: 'Novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: '9',
      name: 'Product 9',
      price: 950,
      condition: 'Usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
  ]

  const carouselItems = [
    {
      src: '/assets/images/carousel/carousel-item-1.jpg',
      alt: 'Anúncio do carrossel',
      text: 'Se vista bem sem gastar muito',
    },
    {
      src: '/assets/images/carousel/carousel-item-2.jpg',
      alt: 'Anúncio do carrossel',
    },
    {
      src: '/assets/images/carousel/carousel-item-3.png',
      alt: 'Anúncio do carrossel',
    },
  ]

  const listCardAdBanner = [
    {
      icon: 'icon-[solar--dumbbell-large-bold-duotone]',
      title: 'Precisando de roupas de treino?',
      click: 'Clique aqui!',
    },
    {
      icon: 'icon-[solar--earth-bold]',
      title: 'Precisando roupas para o verão?',
      click: 'Clique aqui!',
    },
  ]

  const categoriesNavigation = [
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
    {
      name: 'Bolsas',
      url: '#',
      image: '/assets/images/categories/category-beauty.png',
      alt: 'Bolsas',
    },
  ]

  return (
    <main className="flex flex-col items-center gap-4 min-h-screen 2xl:gap-8">
      <section className="w-full">
        <CarouselHome carouselItems={carouselItems}></CarouselHome>
      </section>

      <section className="container flex flex-wrap items-center justify-center gap-4 my-8">
        {listCardAdBanner &&
          listCardAdBanner.map((item, index) => (
            <CardAdBanner.Root
              key={index}
              href={'#'}
              colors={index == 1 ? 'second' : undefined}
            >
              <CardAdBanner.Icon icon={item.icon}></CardAdBanner.Icon>
              <div className="flex flex-col gap-1 lg:gap-2">
                <p className="text-xs font-medium lg:text-base">{item.title}</p>
                <p className="text-xs font-bold lg:text-base">{item.click}</p>
              </div>
            </CardAdBanner.Root>
          ))}
      </section>

      <section className="container flex flex-col items-center self-stretch gap-4 my-4 lg:gap-8">
        <h2 className="sm:text-xl uppercase">
          <strong>Promoções</strong>
        </h2>
        <div className="flex flex-wrap justify-center self-stretch gap-2">
          {dailyOffer &&
            dailyOffer.length > 0 &&
            dailyOffer.map((product) => (
              <Link
                key={product.id}
                href={'#'}
                className={
                  'slide-top' /*'hover:scale-110 transition ease-in-out delay-150'*/
                }
              >
                <CardProduct.Root className="shadow-none">
                  <CardProduct.Image src={product.image ?? ''} />
                  <CardProduct.Data>
                    <CardProduct.Title>{product.name}</CardProduct.Title>
                    <CardProduct.Price
                      value={product.price}
                    ></CardProduct.Price>
                  </CardProduct.Data>
                </CardProduct.Root>
              </Link>
            ))}
        </div>
      </section>

      

      <section className="container flex flex-col items-center self-stretch gap-4 my-4 lg:gap-8">
        <h2 className="sm:text-xl uppercase">
          <strong>Últimos itens adicionados</strong>
        </h2>
        <div className="flex flex-wrap justify-center self-stretch gap-2">
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
                    <CardProduct.Price
                      value={product.price}
                    ></CardProduct.Price>
                    <CardProduct.Btn href={'#'}>Comprar</CardProduct.Btn>
                  </div>
                </CardProduct.Data>
              </CardProduct.Root>
            ))}
        </div>
      </section>

      <section className="container flex flex-col items-center self-stretch gap-4 mt-4 mb-16 lg:gap-8">
        <h2 className="sm:text-xl uppercase">
          <strong>Pode ser do seu interesse</strong>
        </h2>
        <CarouselMini carouselItems={categoriesNavigation} />
      </section>
    </main>
  )
}
