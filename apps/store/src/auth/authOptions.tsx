import { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req: any) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const { username, password } = credentials

        const res = await fetch(`http://localhost:3001/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })

        if (res.status == 401 || res.status == 403) {
          return null
        }

        const user = await res.json()

        return user
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user)
        return {
          ...token,
          ...user,
        }

      return token
    },

    async session({ token, session }) {
      session.user = token.user
      session.tokens = token.tokens

      return session
    },
  },
}