import { authOptions } from '@/auth/authOptions'
import { UserService } from '@/services/UserService'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Perfil() {
  const session = await getServerSession(authOptions)

  if (session && session.user) {
    if (new Date().getTime() > session.tokens.expires) {
      redirect('/logout')
    }
  }

  const menu = [
    {
      icon: 'icon-[solar--user-id-bold]',
      text: 'Dados de usuário',
      href: '/profile/dados',
    },
    {
      icon: 'icon-[solar--point-on-map-perspective-bold-duotone]',
      text: 'Endereços de entrega',
      href: '/profile/enderecos',
    },
    {
      icon: 'icon-[solar--bag-check-bold]',
      text: 'Histórico de pedidos',
      href: '/profile/pedidos',
    },
    {
      icon: 'icon-[solar--call-chat-bold-duotone]',
      text: 'Protocolos e atendimento',
      href: '/profile/atendimento',
    },
  ]

  if (!session || !session.user) {
    return (
      <main className="min-h-screen flex flex-col items-center p-8">
        <h1 className="text-xl font-medium text-center">
          Faça login para acessar está página
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <section className="bg-card flex flex-col items-center gap-2 p-6 rounded shadow w-full max-w-[440px] sm:max-w-[520px] sm:p-8 sm:gap-4">
        <div className="flex flex-col items-center justify-center gap-2 py-8 w-full sm:gap-4">
          <figure className="flex justify-center items-center p-1 rounded-full border-primary border-2">
            {session.user.profile_image ? (
              <Image
                src={session.user.profile_image}
                width={96}
                height={96}
                alt="Imagem do usuário"
                className="rounded-full w-[96px] h-[96px] sm:w-[128px] sm:h-[128px]"
              />
            ) : (
              <i className="icon-[solar--user-bold] text-primary w-[96px] h-[96px] sm:w-[128px] sm:h-[128px]"></i>
            )}
          </figure>
          <div className="flex flex-col items-center gap-1 py-1 text-center w-full sm:gap-2">
            <h2 className="text-xl font-bold sm:text-2xl">{session.user.name}</h2>
            <span className="flex justify-center items-start self-stretch gap-1 w-full">
              <i className="icon-[solar--letter-bold] min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px]"></i>
              <p className="text-xs truncate sm:text-sm">{session.user.email}</p>
            </span>
          </div>
        </div>
        <hr className="border-placeholder w-full" />
        <ul className="flex flex-col self-stretch gap-4 py-2">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex justify-between items-center py-1"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-4">
                  <i
                    className={`${item.icon} w-[32px] h-[32px] text-primary`}
                  ></i>
                  <p className="text-sm font-medium sm:text-base">{item.text}</p>
                </span>
                <span className="flex items-center justify-center">
                  <i className="icon-[solar--alt-arrow-right-broken] w-[20px] h-[20px]"></i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
