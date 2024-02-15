import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import './carousel.scss'
import Image from 'next/image'

export default function CarouselRoot() {
  return (
    <Carousel className="">
      <CarouselContent className="w-60 h-40">
        <CarouselItem>
          <Image
            src={'/assets/images/carousel/carousel-item-1.png'}
            width={240}
            height={170}
            alt="Anúncio do carrossel"
            priority={true}
            className="rounded w-60 h-40"
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
            className="rounded"
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
            className="rounded"
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
  )
}
