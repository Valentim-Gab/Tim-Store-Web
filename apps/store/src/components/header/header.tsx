import { cookies } from 'next/headers'
import React from 'react'

export default function Header() {
  //const token = cookies().get('access_token')

  return (
    <header className="flex justify-center items-center self-stretch h-14 shadow-md bg-violet-500">
      <div className="flex items-center self-stretch flex-1 gap-4 py-2 px-4">
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div>
        <i className="icon-[solar--hamburger-menu-broken]"></i>
      </div>
    </header>
  )
}