'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CategoryMiniCard } from './category-mini-card'

const categoriesNavigation = [
  {
    id: 1,
    name: 'Bolsas',
    image:
      'https://cdn.discordapp.com/attachments/1175185524433109093/1206969174698496090/pink-office-handbag-free-png.webp?ex=65ddf0a3&is=65cb7ba3&hm=366d9f4f90faa157f94f43ca464eeaf21013d1e8afc25b31def70559c7f74b37&',
  },
]

export default function CategoryPopup() {
  const imageDiscordExample =
    'https://cdn.discordapp.com/attachments/1175185524433109093/1206969174698496090/pink-office-handbag-free-png.webp?ex=65ddf0a3&is=65cb7ba3&hm=366d9f4f90faa157f94f43ca464eeaf21013d1e8afc25b31def70559c7f74b37&'

  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-center gap-2 cursor-pointer py-1 px-2">
        <i className="icon-[solar--hamburger-menu-bold] w-6 h-6"></i>
        <p className="font-bold">Todas as categorias</p>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-8 p-4 self-stretch">
        <div className="flex justify-between items-center w-full">
          <CategoryMiniCard.Root href={'/bag'}>
            <CategoryMiniCard.Image src={imageDiscordExample} />
            <CategoryMiniCard.Text>Bolsas</CategoryMiniCard.Text>
          </CategoryMiniCard.Root>
        </div>
      </PopoverContent>
    </Popover>
  )
}
