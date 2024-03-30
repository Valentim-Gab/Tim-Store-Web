import { User } from "@/interfaces/User";
import NextAuth from "next-auth/next";

declare module "next-auth" {

  interface Session {
    user: User
    tokens: {
      access_token: string
      refresh_token: string
      expires: number
    }
  }
}

import { JWT } from "next-auth/jwt"

declare module 'next-auth/jwt' {

  interface JWT {
    user: User
    tokens: {
      access_token: string
      refresh_token: string
      expires: number
    }
  }
}