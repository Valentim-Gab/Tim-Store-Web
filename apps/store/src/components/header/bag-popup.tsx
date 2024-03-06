'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import './bag-popup.scss'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export default function BagPopup() {
  const listProduct = [
    {
      id: 1,
      name: 'Casaco grande',
      price: 50.0,
      condition: 'semi-novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: 2,
      name: 'Calça',
      price: 150.0,
      condition: 'novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: 3,
      name: 'Tênis',
      price: 250.0,
      condition: 'usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: 4,
      name: 'Bermuda',
      price: 100.0,
      condition: 'novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: 5,
      name: 'Blusa',
      price: 70.0,
      condition: 'usado',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
    {
      id: 6,
      name: 'Vestido',
      price: 200.0,
      condition: 'novo',
      image:
        'https://cdn.discordapp.com/attachments/1175185524433109093/1214750965538889778/Frame_2.png?ex=65fa3fff&is=65e7caff&hm=e6ecc45725f15137f7b54a3f04a9fbcd95f614d7f2c158ee9e2485333c2569c0&',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [tooltipRemoveOpen, setTooltipRemoveOpen] = useState<number | null>(
    null
  )

  function openTooltipRemove(productId: number) {
    if (productId !== tooltipRemoveOpen) {
      setTooltipRemoveOpen(productId)

      return
    }

    setTooltipRemoveOpen(null)
    console.log(`remove product ${productId}`)
  }

  function getTotal() {
    let total = 0

    listProduct.forEach((product) => {
      total += product.price
    })

    return total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <Popover onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        data-open={isOpen}
        className="flex justify-center items-center p-1 rounded-full data-[open=true]:bg-background data-[open=true]:text-primary dark:data-[open=true]:text-white"
      >
        <i className="icon-[solar--bag-4-bold] w-8 h-8"></i>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-between items-center text-foreground bg-background rounded shadow-md z-20 p-0 pt-1 w-72 h-80 2xl:w-80 2xl:h-96">
        <ul className="bag-popup-content flex flex-col items-center flex-1 self-stretch overflow-y-scroll mb-1">
          {listProduct &&
            listProduct.map((product) => (
              <li
                key={product.id}
                className="bag-item flex justify-between self-stretch py-1 mx-2 border-b border-primary"
                onMouseLeave={() => setTooltipRemoveOpen(null)}
              >
                <div className="flex gap-2">
                  <Image
                    src={product.image}
                    alt={''}
                    width={50}
                    height={50}
                    className="rounded w-16 h-16"
                  />
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <p className="font-medium first-letter:uppercase">
                      {product.name}
                    </p>
                    <p className="font-bold text-primary text-base">
                      {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center self-stretch">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip open={tooltipRemoveOpen === product.id}>
                      <TooltipTrigger>
                        <span
                          className="bag-item-remove flex justify-center items-center self-stretch p-4"
                          onClick={() => openTooltipRemove(product.id)}
                        >
                          <i className="icon-[solar--close-circle-broken] w-6 h-6 text-light-black"></i>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Clique novamente para excluir</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-center items-center gap-2 self-stretch rounded-b p-1 text-sm">
          <p className="font-medium">Total: {getTotal()}</p>
          <Link
            href={'/'}
            className=" py-1 px-2 bg-primary text-background rounded font-semibold"
          >
            Ver carrinho
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}
