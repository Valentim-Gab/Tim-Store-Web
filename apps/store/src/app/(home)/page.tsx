import { CardAdBanner } from '@/components/cards/card-ad-banner'
import { CardProduct } from '@/components/cards/card-product'
import CarouselHome from '@/components/carousel-home/carousel-home'
import CarouselMini from '@/components/category/carousel-mini'
import CategoryMiniCard from '@/components/category/category-mini-card'
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

  const dailyOffer: Product = {
    id: '6',
    name: 'Product 6',
    price: 650,
    condition: 'Novo',
    image:
      'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
  }

  const carouselItems = [
    {
      src: '/assets/images/carousel/carousel-item-1.png',
      alt: 'Anúncio do carrossel',
      text: 'Se vista bem sem gastar muito',
    },
    {
      src: '/assets/images/categories/category-male.png',
      alt: 'Anúncio do carrossel',
      text: 'Os homens também merecem',
    },
    {
      src: '/assets/images/categories/category-female.png',
      alt: 'Anúncio do carrossel',
      text: 'Para todas as mulheres',
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
  ]

  return (
    <main className="flex flex-col items-center gap-4 container min-h-screen 2xl:gap-8">
      <section className="flex flex-col items-center justify-center self-stretch gap-8 my-4 lg:gap-16 lg:my-6 lg:flex-row lg:items-start">
        <CarouselHome carouselItems={carouselItems}></CarouselHome>
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
      </section>

      <section className="flex items-center justify-center flex-wrap gap-4 my-4 lg:gap-16 lg:my-8">
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

      <section className="flex flex-col items-center self-stretch gap-4 my-4 lg:gap-8">
        <h2 className="sm:text-2xl">
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

      <section className="flex flex-col items-center self-stretch gap-4 my-4 lg:h-[200px]">
        <h2>
          <strong>Pode ser do seu interesse</strong>
        </h2>
        <div className="flex items-center gap-2 self-stretch overflow-x-scroll w-[250px] pb-2 lg:absolute lg:left-1/3 lg:mt-16">
          {categoriesNavigation.map((category, index) => (
            <CategoryMiniCard
              key={index}
              href={category.url}
              image={category.image}

            >
              <p className="text-xs font-light">{category.name}</p>
            </CategoryMiniCard>
          ))}
        </div>

        {/* <CarouselMini carouselItems={categoriesNavigation} /> */}
      </section>

      <section className='my-8'></section>
    </main>
  )
}
