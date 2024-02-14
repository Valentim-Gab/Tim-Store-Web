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
      <PopoverContent
        className="hidden lg:flex flex-col gap-4 self-stretch w-[960px]"
        align="start"
      >
        <div className="flex justify-between items-center p-4 w-full">
          {categoriesNavigation.map((category) => (
            <div
              key={category.id}
              data-open={selectedCategory === category.id}
              className="transition ease-in-out duration-400 data-[open=true]:scale-110"
              onMouseEnter={() => {
                setSelectedCategory(category.id)
              }}
            >
              <CategoryMiniCard.Root href={category.url}>
                <CategoryMiniCard.Image src={category.image} />
                <CategoryMiniCard.Text>{category.name}</CategoryMiniCard.Text>
              </CategoryMiniCard.Root>
            </div>
          ))}
        </div>
        <div className="flex justify-between self-stretch gap-2 p-2 w-full">
          {categoriesNavigation
            .filter(
              (categoryNavigation) => categoryNavigation.id === selectedCategory
            )
            .map((categoryNavigation) =>
              categoryNavigation.mainCategories.map((mainCategory, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Link
                    href={mainCategory.url ?? '#'}
                    className="font-semibold text-xl p-1 hover:text-primary"
                  >
                    {mainCategory.name}
                  </Link>
                  <ul className="flex flex-col gap-1">
                    {mainCategory.subCategories.map((subCategory, index) => (
                      <li key={index}>
                        <Link
                          href={subCategory.url}
                          className="hover:text-primary p-1"
                        >
                          {subCategory.name}
                        </Link>
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
