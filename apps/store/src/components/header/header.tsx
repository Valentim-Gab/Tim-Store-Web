'use client'

import React, { useEffect, useState } from 'react'
import './header.scss'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import BagPopup from './bag-popup'

export default function Header() {
  const pathname = usePathname()
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

      if (currentScrollTop > lastScrollTop) setIsHeaderHidden(true)
      else setIsHeaderHidden(false)

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return (
    <header className="flex-col self-stretch h-36 hidden w-full lg:flex">
      <div
        className={`header-container bg-primary text-background shadow-md fixed top-0 w-full ${
          isHeaderHidden ? 'hidden-scroll' : ''
        }`}
      >
        <div className="container flex justify-between items-center self-stretch h-20">
          <Link
            href="/"
            className="logo text-2xl font-black cursor-pointer px-2"
          >
            TIM-BRECHO
          </Link>
          <div className="search-container flex gap-2 items-center py-1 px-2 rounded bg-background w-2/5 min-w-80">
            <input
              placeholder="O que você procura?"
              type="text"
              className="bg-transparent text-sm border-none outline-none text-foreground w-full py-1 px-2 placeholder:text-light-black"
            />
            <button className="flex justify-center items-center rounded p-1">
              <i className="icon-[lucide--search] w-6 h-6 text-light-black"></i>
            </button>
          </div>
          <div className="flex justify-end items-center gap-8 self-stretch">
            <BagPopup />
            <button className="flex justify-center items-center gap-2 p-4 font-bold rounded">
              <i className="icon-[solar--login-3-bold] w-6 h-6"></i>
              Entrar
            </button>
          </div>
        </div>
        <Navbar pathname={pathname} />
      </div>
    </header>
  )
}
