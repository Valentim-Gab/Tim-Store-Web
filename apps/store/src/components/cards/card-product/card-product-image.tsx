import Image from 'next/image'
import React from 'react'

interface CardProductImageProps {
  src: string
}

export default function CardProductImage({ src }: CardProductImageProps) {
  return (
    <div className="w-full h-[144px] sm:h-[280px] 2xl:h-[348px]">
      <Image
        src={src}
        alt="Imagem do produto"
        width={120}
        height={144}
        className="rounded-tl rounded-tr h-[144px] object-cover w-full sm:h-[280px] 2xl:h-[348px]"
      />
    </div>
  )
}
