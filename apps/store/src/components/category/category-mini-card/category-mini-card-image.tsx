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
      width={100}
      height={100}
      alt={rest.alt ?? 'Imagem da categoria'}
      className={twMerge('rounded-full shadow-lg', rest.className)}
    />
  )
}
