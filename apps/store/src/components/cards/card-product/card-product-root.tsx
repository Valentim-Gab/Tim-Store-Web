import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProductRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function CardProductRoot({
  children,
  ...rest
}: CardProductRootProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center w-[120px] rounded shadow bg-card sm:w-[200px] 2xl:w-[300px]',
        rest.className
      )}
    >
      {children}
    </div>
  )
}
