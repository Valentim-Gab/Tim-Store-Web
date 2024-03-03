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

  return (
    <div className="flex flex-col items-center gap-2 px-8">
      <Carousel setApi={setCarouseuApi}>
        <CarouselContent className="min-w-[240px] min-h-[170px] max-w-[440px] max-h-[300px]">
          <CarouselItem>
            <Image
              src={'/assets/images/carousel/carousel-item-1.png'}
              width={240}
              height={170}
              alt="Anúncio do carrossel"
              priority={true}
              className="rounded w-full h-full object-cover"
            />
            <p className="content-text absolute bottom-0 text-white m-1 font-bold w-52">
              Se vista bem sem gastar muito
            </p>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={'/assets/images/categories/category-male.png'}
              width={240}
              height={170}
              alt="Anúncio do carrossel"
              className="rounded w-full h-full object-cover"
            />
            <p className="content-text absolute bottom-0 text-white m-2 font-bold w-52">
              Os homens também merecem
            </p>
          </CarouselItem>
          <CarouselItem className="">
            {' '}
            <Image
              src={'/assets/images/categories/category-female.png'}
              width={240}
              height={170}
              alt="Anúncio do carrossel"
              className="rounded w-full h-full object-cover"
            />
            <p className="content-text absolute bottom-0 text-white m-2 font-bold w-52">
              Para todas as mulheres
            </p>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious
          className="active:rounded-full"
          variant={'ghost'}
          icon={
            <i className="icon-[solar--alt-arrow-left-bold-duotone] w-8 h-8 text-primary rounded-full drop-shadow-md"></i>
          }
        />
        <CarouselNext
          variant={'ghost'}
          icon={
            <i className="icon-[solar--alt-arrow-right-bold-duotone] w-8 h-8 text-primary"></i>
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
                className="w-3 h-3 rounded-full bg-foreground opacity-50 data-[current=true]:opacity-100 data-[current=true]:w-5 transition  delay-400"
              ></div>
            ))}
      </div>
    </div>
  )
}
