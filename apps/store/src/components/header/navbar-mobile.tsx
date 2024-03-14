'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './navbar-mobile.scss'
import { tv } from 'tailwind-variants'
import DrawerThemeMobile from './drawer-theme-mobile'
import { parseCookies } from 'nookies'

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
  const [currentRoute, setCurrentRoute] = useState('')
  const [sessionData, setSessionData] = useState<any>(null)
  const { session } = parseCookies()

  useEffect(() => {
    if (session) {
      try {
        if (!sessionData || sessionData.name != JSON.parse(session).name)
          setSessionData(JSON.parse(session))
      } catch (error) {
        setSessionData(null)
      }
    } else if (currentRoute != pathname) {
      setSessionData(null)
    }
  }, [session, sessionData, pathname, currentRoute])

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
        {sessionData && (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/user'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/user'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/user'}
                className={navItemStyles({ active: pathname === '/user' })}
              >
                <i className={`icon-[solar--user-bold] w-[32px] h-[32px]`}></i>
                <p className="font-medium">{sessionData.name}</p>
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
              {index === 0 && !sessionData && <DrawerThemeMobile />}
            </li>
          ))}
        {!sessionData ? (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/auth/signin'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/auth/signin'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/auth/signin'}
                className={navItemStyles({ active: pathname === '/auth/signin' })}
              >
                <i className={`icon-[solar--login-3-bold] text-lg`}></i>
                <p className="font-medium">Entrar</p>
              </div>
            </Link>
          </li>
        ) : (
          <li className="flex justify-between items-center gap-2">
            <Link
              href={'/auth/signup'}
              onClick={() => {
                setActive(false)
              }}
              data-active={pathname === '/auth/signup'}
              className="flex items-center self-stretch cursor-pointer p-4 w-full data-[active=true]:py-1"
            >
              <div
                data-active={pathname === '/auth/signup'}
                className={navItemStyles({ active: pathname === '/auth/signup' })}
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
