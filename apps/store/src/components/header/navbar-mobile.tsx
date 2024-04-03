'use client'

import Link from 'next/link'
import React from 'react'
import './navbar-mobile.scss'
import { tv } from 'tailwind-variants'
import DrawerThemeMobile from './drawer-theme-mobile'
import SignInBtn from './sign-in-btn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

interface NavbarProps {
  isOpen: boolean
  pathname: string
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const navItemStyles = tv({
  base: 'item flex items-center justify-center gap-2',
  variants: {
    active: {
      true: 'px-2 py-1 mt-1 bg-white text-primary rounded',
    },
  },
})

export default function NavbarMobile({
  isOpen,
  setActive,
  pathname,
}: NavbarProps) {
  const { data: session } = useSession()

  const items = [
    {
      icon: 'icon-[solar--home-bold]',
      text: 'Início',
      url: '/',
    },
    {
      icon: 'icon-[solar--bag-4-bold]',
      text: 'Carrinho',
      url: '/test',
    },
    {
      icon: 'icon-[solar--bag-4-bold]',
      text: 'Cliente',
      url: '/cliente',
    },
    {
      icon: 'icon-[solar--hamburger-menu-bold]',
      text: 'Categorias',
      url: '/categories',
    },
  ]

  return (
    <nav
      data-open={isOpen}
      className={`navbar-mobile bg-primary text-white w-full`}
    >
      <ul className="items pb-2">
        {session && session.user && (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/perfil'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/perfil'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/perfil'}
                className={navItemStyles({ active: pathname === '/perfil' })}
              >
                {session.user.profile_image ? (
                  <Image
                    src={session.user.profile_image}
                    width={32}
                    height={32}
                    alt="Imagem do usuário"
                    className="rounded-full w-[32px] h-[32px]"
                  />
                ) : (
                  <i
                    className={`icon-[solar--user-bold] w-[32px] h-[32px]`}
                  ></i>
                )}
                <p className="font-medium">{session.user.name}</p>
              </div>
            </Link>
            <DrawerThemeMobile />
          </li>
        )}
        {items &&
          items.map((item, index) => (
            <li key={index} className="flex justify-between items-center gap-2">
              <Link
                href={item.url}
                onClick={() => {
                  setActive(false)
                }}
                data-active={pathname === item.url}
                className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
              >
                <div
                  data-active={pathname === item.url}
                  className={navItemStyles({ active: pathname === item.url })}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <p className="font-medium">{item.text}</p>
                </div>
              </Link>
              {index === 0 && !session && <DrawerThemeMobile />}
            </li>
          ))}
        {!session ? (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/login'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/login'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/login'}
                className={navItemStyles({
                  active: pathname === '/login',
                })}
              >
                <i className={`icon-[solar--login-3-bold] text-lg`}></i>
                <p className="font-medium">Entrar</p>
              </div>
            </Link>
          </li>
        ) : (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/logout'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/logout'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/logout'}
                className={navItemStyles({
                  active: pathname === '/logout',
                })}
              >
                <i className={`icon-[solar--login-3-bold] text-lg`}></i>
                <p className="font-medium">Sair</p>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
