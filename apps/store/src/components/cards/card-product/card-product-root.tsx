import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardProductRoot() {
  return (
    <div className="flex flex-col items-center w-[120px] self-stretch rounded shadow">
      <div className="w-full h-[144px]">
        <Image
          src={'https://via.placeholder.com/200'}
          alt="Picture of the author"
          width={120}
          height={144}
          className="rounded-tl rounded-tr"
        />
      </div>
      <div className="flex flex-vol p-2 self-stretch">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs text-center">
            <strong>Casaco Laranja de tecido</strong>
          </h3>
          <p className="text-xs text-center">Semi-novo</p>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-xs text-primary">R$ 54,00</p>
            <Link
              href={'#'}
              className="flex items-center justify-center gap-2 px-6 py-1 text-xs bg-primary text-white rounded"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
