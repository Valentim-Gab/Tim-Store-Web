'use client'

import { cookies } from 'next/headers'
import React from 'react'
import './header.scss'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'

export default function Header() {
  //const token = cookies().get('access_token')
  const [active, setActive] = React.useState(false)
  const pathname = usePathname()

  function showItems() {
    setActive(!active)
  }

  return (
    <header className="flex justify-center items-center self-stretch h-14 shadow-md bg-primary text-primary-foreground">
      <div className="flex items-center self-stretch flex-1 gap-4 py-2 px-4">
        <button className="flex justify-center items-center">
          <i className="icon-[lucide--search] w-8 h-8"></i>
        </button>
        <input
          type="text"
          placeholder="Pesquisar"
          className="font-medium border-none outline-none bg-transparent w-full placeholder:text-gray-300"
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
      <Navbar active={active} setActive={setActive} pathname={pathname} />
    </header>
  )
}
