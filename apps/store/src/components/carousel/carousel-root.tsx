'use client'

import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import './carousel.scss'
import Image from 'next/image'

export default function CarouselRoot() {
  const [carouseuApi, setCarouseuApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!carouseuApi) {
      return
    }

    setCount(carouseuApi.scrollSnapList().length)
    setCurrent(carouseuApi.selectedScrollSnap() + 1)

    carouseuApi.on('select', () => {
      setCurrent(carouseuApi.selectedScrollSnap() + 1)
    })
  }, [carouseuApi])

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

  return (
    <div className="flex flex-col items-center gap-2 px-2 sm:px-8 sm:gap-4">
      <Carousel setApi={setCarouseuApi}>
        <CarouselContent className="min-w-[240px] min-h-[170px] max-w-[440px] max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[500px]">
          {carouselItems &&
            carouselItems.length > 0 &&
            carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  src={item.src}
                  width={240}
                  height={170}
                  alt={item.alt}
                  priority={true}
                  className="rounded w-full h-full object-cover"
                />
                <p className="content-text absolute bottom-0 text-white m-2 font-bold min-w-52 w-4/5 sm:w-[400px] sm:text-xl sm:m-4 lg:text-2xl 2xl:text-4xl 2xl:w-[600px]">
                  {item.text}
                </p>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious
          className="rounded-full hover:bg-transparent w-8 h-8 -left-8 sm:w-[60px] sm:h-[60px] sm:-left-14 2xl:-left-16"
          variant={'ghost'}
          icon={
            <i className="icon-[solar--alt-arrow-left-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md"></i>
          }
        />
        <CarouselNext
          className="rounded-full hover:bg-transparent w-8 h-8 -right-8 sm:w-[60px] sm:h-[60px] sm:-right-14 2xl:-right-16"
          variant={'ghost'}
          icon={
            <i className="icon-[solar--alt-arrow-right-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md"></i>
          }
        />
      </Carousel>
      <div className="flex gap-2">
        {carouseuApi &&
          carouseuApi.scrollSnapList().length > 1 &&
          carouseuApi
            .scrollSnapList()
            .map((_, index) => (
              <div
                key={index}
                data-current={current - 1 == index}
                className="w-3 h-3 rounded-full bg-foreground opacity-50 data-[current=true]:opacity-100 data-[current=true]:w-5 transition  delay-400 sm:w-4 sm:h-4 sm:data-[current=true]:w-8 2xl:w-6 2xl:h-6 2xl:data-[current=true]:w-12"
              ></div>
            ))}
      </div>
    </div>
  )
}
