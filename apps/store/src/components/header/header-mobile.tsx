'use client'

import React, { useState } from 'react'
import './header-mobile.scss'
import { usePathname } from 'next/navigation'
import NavbarMobile from './navbar-mobile'

export default function HeaderMobile() {
  //const token = cookies().get('access_token')
  const [active, setActive] = useState(false)
  const pathname = usePathname()

  function showItems() {
    setActive(!active)
  }

  return (
    <header className="header-mobile flex justify-center items-center self-stretch h-14 shadow-md bg-primary text-background sticky top-0 sm:h-16 lg:hidden">
      <div className="flex items-center self-stretch flex-1 gap-4 py-2 px-4">
        <button className="flex justify-center items-center">
          <i className="icon-[lucide--search] w-8 h-8"></i>
        </button>
        <input
          id="search"
          placeholder="O que você procura?"
          type="text"
          className="font-medium border-none outline-none bg-transparent w-full placeholder:text-light-white"
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={showItems}
          className="flex justify-center items-center"
        >
          {!active ? (
            <span className="flex items-center justify-center w-14 h-14">
              <i className="burger-icon icon-[solar--hamburger-menu-broken] w-14 h-14"></i>
            </span>
          ) : (
            <span className="flex items-center justify-center w-14 h-14">
              <i className="burger-icon icon-[solar--close-circle-broken] w-10 h-10"></i>
            </span>
          )}
        </button>
      </div>
      <NavbarMobile active={active} setActive={setActive} pathname={pathname} />
    </header>
  )
}