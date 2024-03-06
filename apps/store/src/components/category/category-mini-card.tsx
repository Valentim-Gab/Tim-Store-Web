import Image from 'next/image'
import Link from 'next/link'
import React, { LinkHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryMiniCardRootProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  image: string
}

export default function CategoryMiniCard({
  image,
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
      <Image
        src={image ?? ''}
        width={100}
        height={100}
        alt="Imagem da categoria"
        className="rounded-full shadow-lg min-w-[100px]"
      />
      {rest.children}
    </Link>
  )
}
