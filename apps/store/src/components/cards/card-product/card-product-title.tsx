import React, { ReactNode } from 'react'

interface CardProductTitleProps {
  children: ReactNode
}

export default function CardProductTitle({ children }: CardProductTitleProps) {
  return (
    <h3 className="text-xs text-center sm:text-base">
      <strong>{children}</strong>
    </h3>
  )
}
