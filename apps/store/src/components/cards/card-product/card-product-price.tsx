import React, { ReactNode } from 'react'

interface CardProductPriceProps {
  value: number
}

export default function CardProductPrice({ value }: CardProductPriceProps) {
  return (
    <p className="font-bold text-xs text-primary dark:text-white sm:text-base 2xl:text-xl">
      {value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </p>
  )
}
