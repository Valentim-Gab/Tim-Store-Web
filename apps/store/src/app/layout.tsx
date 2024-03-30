import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderMobile from '@/components/header/header-mobile'
import Header from '@/components/header/header'
import ThemeProvider from '@/components/providers/theme-provider'
import Footer from '@/components/footer/footer'
import { Toaster } from '@/components/ui/toaster'
import SessionProviderMain from '@/components/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tim Brecho',
  description: 'Compre roupas de qualidade gastando pouco!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProviderMain>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <HeaderMobile />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </SessionProviderMain>
      </body>
    </html>
  )
}
