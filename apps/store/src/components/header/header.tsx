'use client'

import React from 'react'
import './header.scss'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="header hidden flex-col items-center bg-primary text-background shadow-md sticky top-0 lg:flex">
      <div className="flex justify-between items-center self-stretch h-20 px-16">
        <Link href="/" className="logo text-2xl font-black cursor-pointer px-2">TIM-BRECHO</Link>
        <div className="search-container flex gap-2 items-center py-1 px-2 rounded bg-background">
          <input
            placeholder="O que você procura?"
            type="text"
            className="bg-transparent text-sm border-none outline-none text-foreground w-full py-1 px-2 placeholder:text-lightblack"
          />
          <button className="flex justify-center items-center rounded p-1">
            <i className="icon-[lucide--search] w-6 h-6 text-lightblack"></i>
          </button>
        </div>
        <div className="flex justify-end items-center gap-8 self-stretch">
          <button className="flex justify-center items-center p-2 rounded">
            <i className="icon-[solar--bag-4-bold] w-8 h-8"></i>
          </button>
          <button className="flex justify-center items-center gap-2 p-4 font-bold rounded">
            <i className="icon-[solar--login-3-bold] w-6 h-6"></i>
            Entrar
          </button>
        </div>
      </div>
      <Navbar pathname={pathname} />
    </header>
  )
}
