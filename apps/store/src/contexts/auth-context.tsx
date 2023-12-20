'use client'

import { Login } from '@/interfaces/Login'
import { User } from '@/interfaces/User'
import { UserService } from '@/services/UserService'
import { useRouter } from 'next/navigation'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'

interface AuthContextInterface {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: Login) => Promise<void>
  ctx?: any
}

export const AuthContext = createContext({} as AuthContextInterface)

export function AuthProvider({ children, ctx }: { children: React.ReactNode, ctx?: any }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const isAuthenticated: boolean = !!user

  useEffect(() => {
    const { access_token } = parseCookies()

    if (access_token) {
      const userService = new UserService()
      
      setUser(userService.getUser())
    }
  }, [])

  async function signIn({ username, password }: Login) {
    const login: Login = {
      username: username,
      password: password
    }

    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })

    if (res.ok) {
      const { user, tokens } = await res.json()
      console.log(tokens)

      setCookie(undefined, 'access_token', tokens.access_token, {
        maxAge: 60 * 60 * 24 * 7, //1 semana
      })
      setCookie(undefined, 'refresh_token', tokens.refresh_token, {
        maxAge: 60 * 60 * 24 * 7, //1 semana
      })

      setUser(user)

      // router.push('/')
    } else {
      console.error('Não deu')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, ctx }}>
      {children}
    </AuthContext.Provider>
  )
}
