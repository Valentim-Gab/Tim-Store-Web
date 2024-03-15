'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SignLinks() {
  const pathname = usePathname()
  const signinPath = '/auth/signin'
  const signupPath = '/auth/signup'

  const className =
    'flex items-center justify-center self-stretch p-4 text-sm font-medium w-full rounded-t' +
    " data-[active=true]:bg-card data-[active=true]:data-[path='/auth/signin']:shadow-[-1px_-2px_3px_0_rgba(0,0,0,0.08)]" +
    " data-[active=true]:data-[path='/auth/signup']:shadow-[1px_-2px_3px_0_rgba(0,0,0,0.08)] ease-in duration-200"

  const links = [
    {
      href: signinPath,
      label: 'Acessar',
    },
    {
      href: signupPath,
      label: 'Criar conta',
    },
  ]

  return (
    <div className="flex self-stretch lg:hidden">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-active={pathname === link.href}
          data-path={pathname}
          className={className}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
