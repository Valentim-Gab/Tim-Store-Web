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
    <Carousel>
      <CarouselContent
       className="min-w-[240px] min-h-[170px] max-w-[440px] max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[500px]"
      >
        {carouselItems &&
          carouselItems.length > 0 &&
          carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CategoryMiniCard href={item.url} image={item.image}>
                <p className="text-xs font-light">{item.name}</p>
              </CategoryMiniCard>
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
  )
}
