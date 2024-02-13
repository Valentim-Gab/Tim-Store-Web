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
      url: '/female',
    },
    {
      text: 'Masculino',
      url: '/male',
    },
    {
      text: 'Infantil',
      url: '/children',
    },
    {
      text: 'Esporte',
      url: '/sport',
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
                className={`flex items-center justify-center cursor-pointer py-1 px-2 rounded ${
                  pathname === item.url ? 'bg-background text-primary' : ''
                }`}
              >
                <p className="font-bold">{item.text}</p>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
