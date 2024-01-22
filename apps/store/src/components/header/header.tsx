import { cookies } from 'next/headers'
import React from 'react'
import './header.scss'

export default function Header() {
  //const token = cookies().get('access_token')

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
        <button className="flex justify-center items-center">
          <i className="icon-[solar--hamburger-menu-broken] w-14 h-14"></i>
        </button>
      </div>
    </header>
  )
}
