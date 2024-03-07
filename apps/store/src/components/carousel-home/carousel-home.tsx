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
import './carousel-home.scss'
import Image from 'next/image'

interface CarouselItem {
  src: string
  alt: string
  text: string
}

export default function CarouselHome({
  carouselItems,
}: {
  carouselItems: CarouselItem[]
}) {
  const [carouseuApi, setCarouseuApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!carouseuApi) {
      return
    }

    setLoading(true)
    setCurrent(carouseuApi.selectedScrollSnap() + 1)

    carouseuApi.on('select', () => {
      setCurrent(carouseuApi.selectedScrollSnap() + 1)
    })

    setLoading(false)

    return () => {
      setLoading(false)
    }
  }, [carouseuApi])

  return (
    <div className="flex flex-col items-center gap-2 sm:px-8 sm:gap-4">
      <Carousel setApi={setCarouseuApi} className='flex flex-col items-center'>
        <CarouselContent className="min-w-[240px] min-h-[170px] max-w-[460px] max-h-[300px] lg:max-w-[600px] lg:max-h-[420px] 2xl:max-w-[1200px] 2xl:max-h-[520px]">
          {carouselItems &&
            carouselItems.length > 0 &&
            carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                {loading ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p>Carregando...</p>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      width={240}
                      height={170}
                      alt={item.alt}
                      priority={true}
                      className="rounded w-full h-full object-cover"
                    />
                    <p className="content-text absolute bottom-0 text-white m-2 font-bold min-w-52 w-4/5 sm:w-[400px] sm:text-xl sm:m-4 lg:text-2xl lg:bottom-8 lg:w-[525px] 2xl:text-4xl 2xl:w-[600px]">
                      {item.text}
                    </p>
                  </>
                )}
              </CarouselItem>
            ))}
        </CarouselContent>
        {!loading && (
          <>
            <CarouselPrevious
              className="rounded bg-white/75 w-6 h-10 -left-0 sm:w-8 sm:h-12 lg:w-10 lg:h-14"
              variant={'ghost'}
              icon={
                <i className="icon-[solar--alt-arrow-left-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md"></i>
              }
            />
            <CarouselNext
              className="rounded bg-white/75 w-6 h-10 -right-0 sm:w-8 sm:h-12 lg:w-10 lg:h-14"
              variant={'ghost'}
              icon={
                <i className="icon-[solar--alt-arrow-right-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md"></i>
              }
            />
          </>
        )}
        <div className="flex gap-1 bg-black/50 absolute top-2 py-1 px-2 rounded-full lg:bottom-4 lg:top-auto">
          {carouseuApi &&
            carouseuApi.scrollSnapList().length > 1 &&
            carouseuApi
              .scrollSnapList()
              .map((_, index) => (
                <div
                  key={index}
                  data-current={current - 1 == index}
                  className="w-1 h-1 rounded-full bg-white opacity-50 data-[current=true]:opacity-100 data-[current=true]:w-3 transition delay-400 sm:w-2 sm:h-2 sm:data-[current=true]:w-6"
                ></div>
              ))}
        </div>
      </Carousel>
    </div>
  )
}
