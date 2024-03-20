import { ReactNode } from 'react'
import Links from '../../../components/sign/sign-links'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen px-4 py-8 lg:py-16">
      <Links />
      {children}
    </main>
  )
}
