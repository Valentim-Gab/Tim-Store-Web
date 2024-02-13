import Link from 'next/link'
import React, { LinkHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryMiniCardRootProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export default function CategoryMiniCardRoot({
  children,
  ...rest
}: CategoryMiniCardRootProps) {
  return (
    <Link
      href={rest.href ?? '#'}
      className={twMerge(
        'flex flex-col items-center gap-2 self-stretch p-2',
        rest.className
      )}
    >
      {children}
    </Link>
  )
}
