'use client'

import React, { Suspense, useEffect, useState } from 'react'
import './header.scss'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Link from 'next/link'
import BagPopup from './bag-popup'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import SignInBtn from './sign-in-btn'

export default function Header() {
  const pathname = usePathname()
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const { theme, setTheme } = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

      setIsHeaderHidden(currentScrollTop > lastScrollTop)

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return (
    <header className="flex-col self-stretch h-36 hidden w-full lg:flex">
      <div
        data-scroll={isHeaderHidden}
        className="header-container bg-primary text-white shadow-md fixed top-0 w-full"
      >
        <div className="container flex justify-between items-center self-stretch h-20">
          <Link
            href="/"
            className="logo text-2xl font-black cursor-pointer px-2"
          >
            <Image
              src={'/assets/images/main/tim-brecho.png'}
              alt="Site logo"
              width={180}
              height={40}
              className="w-[180px] h-[40px]"
              priority={true}
            />
          </Link>
          <div className="search-container flex gap-2 items-center py-1 px-2 rounded bg-background w-2/5 min-w-80">
            <input
              id="search-header"
              name="search-header"
              placeholder="O que você procura?"
              type="text"
              className="bg-transparent text-sm border-none outline-none text-foreground w-full py-1 px-2 placeholder:text-placeholder"
            />
            <button className="flex justify-center items-center rounded p-1">
              <i className="icon-[lucide--search] w-6 h-6 text-placeholder"></i>
            </button>
          </div>
          <div className="flex justify-end items-center gap-8 self-stretch">
            <DropdownMenu onOpenChange={() => setDrawerOpen(!drawerOpen)}>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  data-active={drawerOpen}
                  className="rounded-full mr-2 focus-visible:ring-offset-0 focus-visible:ring-0 data-[active=true]:bg-background data-[active=true]:text-primary dark:data-[active=true]:text-white"
                >
                  <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mx-2">
                <DropdownMenuLabel>Tema do site</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem
                    value="light"
                    className="cursor-pointer focus:bg-primary focus:text-white"
                  >
                    Claro
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="dark"
                    className="cursor-pointer focus:bg-primary focus:text-white"
                  >
                    Escuro
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="system"
                    className="cursor-pointer focus:bg-primary focus:text-white"
                  >
                    Sistema
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <BagPopup />
            <Suspense fallback={<p>Carregando...</p>}>
              <SignInBtn />
            </Suspense>
          </div>
        </div>
        <Navbar pathname={pathname} />
      </div>
    </header>
  )
}
