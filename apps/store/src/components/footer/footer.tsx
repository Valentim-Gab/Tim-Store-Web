import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 p-4 w-full bg-card shadow sm:flex-row sm:justify-between 2xl:p-8">
      <div className="flex flex-col self-stretch gap-4 sm:flex-row 2xl:gap-8">
        <p className="sm:flex items-center justify-center">
          <Link href={'#'} className="text-sm font-medium lg:text-base">
            Contato
          </Link>
        </p>
        <p className="sm:flex items-center justify-center">
          <Link href={'#'} className="text-sm font-medium lg:text-base">
            Sobre nós
          </Link>
        </p>
      </div>
      <div className="flex justify-between items-center self-stretch sm:gap-2 sm:flex-col">
        <div className="flex self-stretch justify-center gap-4">
          <Link href={'#'}>
            <i className="icon-[mdi--instagram] w-6 h-6 lg:w-8 lg:h-8"></i>
          </Link>
          <Link href={'#'}>
            <i className="icon-[lucide--facebook] w-6 h-6 lg:w-8 lg:h-8"></i>
          </Link>
        </div>
        <p className="text-sm font-medium lg:text-base">Tim Brecho &copy; 2024</p>
      </div>
    </footer>
  )
}
