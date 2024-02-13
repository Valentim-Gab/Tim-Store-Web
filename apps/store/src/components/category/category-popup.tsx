'use client'

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CategoryMiniCard } from './category-mini-card'
import Link from 'next/link'
import { CategoryService } from '@/services/category-service/category-service'
import { twMerge } from 'tailwind-merge'

export default function CategoryPopup() {
  const categoryService = new CategoryService()
  const categoriesNavigation = categoryService.getStaticCategories()
  const [selectedCategory, setSelectedCategory] = React.useState(1)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        data-open={isOpen}
        className="flex items-center justify-center gap-2 cursor-pointer py-1 px-2 rounded data-[open=true]:bg-background"
      >
        <i
          data-open={isOpen}
          className="icon-[solar--hamburger-menu-bold] w-6 h-6 data-[open=true]:text-primary"
        ></i>
        <p
          data-open={isOpen}
          className="font-bold data-[open=true]:text-primary"
        >
          Todas as categorias
        </p>
      </PopoverTrigger>
      <PopoverContent className="hidden lg:flex flex-col gap-4 p-4 self-stretch w-[960px] mx-8">
        <div className="flex justify-between items-center w-full">
          {categoriesNavigation.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => {
                setSelectedCategory(category.id)
              }}
            >
              <CategoryMiniCard.Root
                href={category.url}
                className={twMerge(
                  'hover:scale-110 transition ease-in-out duration-400',
                  category.id === selectedCategory ? 'scale-110' : ''
                )}
              >
                <CategoryMiniCard.Image src={category.image} />
                <CategoryMiniCard.Text>{category.name}</CategoryMiniCard.Text>
              </CategoryMiniCard.Root>
            </div>
          ))}
        </div>
        <div className="flex justify-between self-stretch gap-8 p-4 w-full">
          {categoriesNavigation
            .filter(
              (categoryNavigation) => categoryNavigation.id === selectedCategory
            )
            .map((categoryNavigation) =>
              categoryNavigation.mainCategories.map((mainCategory, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-semibold text-xl">{mainCategory.name}</h3>
                  <ul className="flex flex-col gap-2">
                    {mainCategory.subCategories.map((subCategory, index) => (
                      <li key={index}>
                        <Link href={subCategory.url}>{subCategory.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
