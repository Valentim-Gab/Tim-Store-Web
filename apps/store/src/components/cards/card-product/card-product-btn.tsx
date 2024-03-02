import Link from 'next/link'
import React, { ReactNode } from 'react'

interface CardProductBtnProps {
  href: string,
  children: ReactNode
}

export default function CardProductBtn({ href, children }: CardProductBtnProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 px-6 py-1 text-xs bg-primary text-white font-medium rounded sm:text-sm 2xl:text-base"
    >
      {children}
    </Link>
  )
}
