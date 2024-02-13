import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryMiniCardImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function CategoryMiniCardImage({
  ...rest
}: CategoryMiniCardImageProps) {
  return (
    <Image
      src={rest.src ?? ''}
      width={80}
      height={80}
      alt={rest.alt ?? 'Imagem da category image'}
      className={twMerge('rounded-full shadow-lg', rest.className)}
    />
  )
}
