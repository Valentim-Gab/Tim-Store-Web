import React, { ReactNode } from 'react'

interface CardProductRootProps {
  children: ReactNode
}

export default function CardProductRoot({ children }: CardProductRootProps) {
  return (
    <div className="flex flex-col items-center w-[120px] self-stretch rounded shadow bg-card sm:w-[200px] 2xl:w-[300px]">
      {children}
    </div>
  )
}
