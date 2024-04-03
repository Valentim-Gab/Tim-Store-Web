import NextAuth from 'next-auth/next'
import { JWT } from 'next-auth/jwt'
import { User } from '@/interfaces/User'
import { Tokens } from '@/interfaces/Tokens'

declare module 'next-auth' {
  interface Session {
    user: User
    tokens: Tokens
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User
    tokens: Tokens
  }
}
