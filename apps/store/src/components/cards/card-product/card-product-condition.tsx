import React, { ReactNode } from 'react'

interface CardProductConditionProps {
  children: ReactNode
}

export default function CardProductCondition({
  children,
}: CardProductConditionProps) {
  return <p className="text-xs text-center sm:text-sm">{children}</p>
}
