import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import CategoryMiniCard from './category-mini-card'

interface CarouselItem {
  name: string
  url: string
  image: string
  alt: string
}

export default function CarouselMini({
  carouselItems,
}: {
  carouselItems: CarouselItem[]
}) {
  return (
    <Carousel opts={{slidesToScroll: 2}}>
      <CarouselContent className="w-[240px] sm:w-[500px] lg:w-[800px] 2xl:w-[1000px]">
        {carouselItems &&
          carouselItems.length > 0 &&
          carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-2/4 sm:basis-1/4">
              <CategoryMiniCard href={item.url} image={item.image} expand={true}>
                <p className="text-xs font-light lg:text-sm">{item.name}</p>
              </CategoryMiniCard>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious
        className="rounded-full hover:bg-transparent w-8 h-8 -left-10 sm:-left-12 lg:w-[60px] lg:h-[60px] lg:-left-20"
        variant={'ghost'}
        icon={
          <i className="icon-[solar--alt-arrow-left-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md dark:text-white"></i>
        }
      />
      <CarouselNext
        className="rounded-full hover:bg-transparent w-8 h-8 -right-10 sm:-right-12 lg:w-[60px] lg:h-[60px] lg:-right-20"
        variant={'ghost'}
        icon={
          <i className="icon-[solar--alt-arrow-right-bold-duotone] w-full h-full text-primary rounded-full drop-shadow-md dark:text-white"></i>
        }
      />
    </Carousel>
  )
}
