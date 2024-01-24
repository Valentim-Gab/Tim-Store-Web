import Link from 'next/link'
import React from 'react'
import './navbar.scss'

interface NavbarProps {
  active: boolean
  pathname: string
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ active, setActive, pathname }: NavbarProps) {
  const items = [
    {
      icon: 'icon-[solar--home-bold]',
      text: 'Início',
      url: '/',
    },
    {
      icon: 'icon-[solar--bag-4-bold]',
      text: 'Carriho',
      url: '/cart',
    },
    {
      icon: 'icon-[solar--login-3-bold]',
      text: 'Entrar',
      url: '/login',
    },
    {
      icon: 'icon-[solar--hamburger-menu-bold]',
      text: 'Todas as categorias',
      url: '/categories',
    },
  ]

  return (
    <nav
      className={`navbar bg-primary w-full ${
        active ? 'active' : ''
      } sm:w-fit sm:bg-transparent`}
    >
      <ul className="items border-t sm:flex sm:border-none sm:px-4 sm:gap-4">
        {items &&
          items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => {
                setActive(false)
              }}
            >
              <li className="flex items-center self-stretch p-4 cursor-pointer">
                <div
                  className={`item flex items-center gap-2 ${
                    pathname === item.url ? 'text-yellow-300' : ''
                  }`}
                >
                  <i className={`${item.icon} sm:text-2xl`}></i>
                  <p className="sm:text-sm">{item.text}</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </nav>
  )
}
