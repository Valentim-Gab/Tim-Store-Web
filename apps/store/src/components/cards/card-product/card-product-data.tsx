import React, { ReactNode } from 'react'

interface CardProductDataProps {
  children: ReactNode
}

export default function CardProductData({ children }: CardProductDataProps) {
  return (
    <div className="flex flex-col justify-between gap-2 w-full h-full p-2 2xl:p-4 2xl:gap-4">{children}</div>
  )
}
