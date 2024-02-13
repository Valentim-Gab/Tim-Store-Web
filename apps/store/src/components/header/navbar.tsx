import Link from 'next/link'
import React from 'react'
import CategoryPopup from '../category/category-popup'

interface NavbarProps {
  pathname: string
}

export default function Navbar({ pathname }: NavbarProps) {
  const items = [
    {
      text: 'Feminino',
      url: '/feminino',
    },
    {
      text: 'Masculino',
      url: '/masculino',
    },
    {
      text: 'Infantil',
      url: '/infantil',
    },
    {
      text: 'Beleza',
      url: '/beleza',
    },
  ]

  return (
    <nav className="container sticky text-background w-full">
      <ul className="flex items-center self-stretch">
        <li className="flex items-center justify-center self-stretch rounded">
          <CategoryPopup />
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center self-stretch p-4 rounded"
            >
              <Link
                href={item.url}
                data-active={pathname === item.url}
                className="flex items-center justify-center cursor-pointer py-1 px-2 rounded data-[active=true]:bg-background data-[active=true]:text-primary"
              >
                <p className="font-bold">{item.text}</p>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
