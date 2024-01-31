'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import './bag-popup.scss'

export default function BagPopup() {
  const listProduct = [
    {
      id: 1,
      name: 'Casaco grande',
      price: 50.0,
      condition: 'semi-novo',
    },
    {
      id: 2,
      name: 'Calça',
      price: 150.0,
      condition: 'novo',
    },
    {
      id: 3,
      name: 'Tênis',
      price: 250.0,
      condition: 'usado',
    },
    {
      id: 4,
      name: 'Bermuda',
      price: 100.0,
      condition: 'novo',
    },
    {
      id: 5,
      name: 'Blusa',
      price: 70.0,
      condition: 'usado',
    },
    {
      id: 6,
      name: 'Vestido',
      price: 200.0,
      condition: 'novo',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(!isOpen)
  }

  return (
    <Popover onOpenChange={open}>
      <PopoverTrigger
        className={`flex justify-center items-center p-1 rounded-t-full ${
          isOpen ? 'bg-background text-primary' : ''
        }`}
      >
        <i className="icon-[solar--bag-4-bold] w-8 h-8"></i>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-between items-center w-60 h-80 text-foreground bg-background rounded shadow-md z-20 pt-1">
        <div className="bag-popup-content flex flex-col items-center flex-1 self-stretch overflow-y-scroll mb-1">
          {listProduct &&
            listProduct.map((product) => (
              <div
                key={product.id}
                className="flex items-center self-stretch gap-2 py-1 px-2 m-1 shadow-md rounded"
              >
                <Image
                  src={
                    'https://cdn.discordapp.com/attachments/1175185524433109093/1202074715032658010/Frame_2.png?ex=65cc2251&is=65b9ad51&hm=89b8b351dae21ba9f404f380de2d534b9352796b37a7865e5d64672f95ad9266&'
                  }
                  alt={''}
                  width={56}
                  height={56}
                  className="rounded"
                />
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className="text-sm font-medium first-letter:uppercase">
                    {product.name}
                  </p>
                  <p className="text-xs capitalize">{product.condition}</p>
                  <p className="text-xs font-bold text-money-green">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center self-stretch bg-primary rounded-b">
          <Link
            href={'/'}
            className="text-sm font-bold text-background py-1 px-2"
          >
            Acessar Sacola
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}
