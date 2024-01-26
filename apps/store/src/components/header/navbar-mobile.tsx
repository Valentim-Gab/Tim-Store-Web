import Link from 'next/link'
import React from 'react'
import './navbar-mobile.scss'

interface NavbarProps {
  active: boolean
  pathname: string
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarMobile({
  active,
  setActive,
  pathname,
}: NavbarProps) {
  const items = [
    {
      icon: 'icon-[solar--home-bold]',
      text: 'Início',
      url: '/',
    },
    {
      icon: 'icon-[solar--bag-4-bold]',
      text: 'Carrinho',
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
      className={`navbar-mobile bg-primary text-background w-full ${
        active ? 'active' : ''
      }`}
    >
      <ul className="items pb-2">
        {items &&
          items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => {
                setActive(false)
              }}
            >
              <li
                className={`flex items-center self-stretch cursor-pointer p-4 ${
                  pathname === item.url ? 'py-1' : ''
                }`}
              >
                <div
                  className={`item flex items-center justify-center gap-2 ${
                    pathname === item.url
                      ? 'bg-background text-primary py-1 px-2 rounded'
                      : ''
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <p className="font-medium">{item.text}</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </nav>
  )
}
