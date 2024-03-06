import Image from 'next/image'
import Link from 'next/link'
import React, { LinkHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const ImageVariants = tv({
  base: 'rounded-full shadow-lg min-w-[100px]',
  variants: {
    expand: {
      true: 'lg:min-w-[160px]',
    },
  },
})

interface CategoryMiniCardRootProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  image: string
}

export default function CategoryMiniCard({
  image,
  expand,
  ...rest
}: CategoryMiniCardRootProps & VariantProps<typeof ImageVariants>) {
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
        className={ImageVariants({ expand })}
      />
      {rest.children}
    </Link>
  )
}
