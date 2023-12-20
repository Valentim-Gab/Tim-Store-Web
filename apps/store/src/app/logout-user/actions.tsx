'use server'

import { destroyCookie } from "nookies"

export async function handleLogout(ctx: any) {
  destroyCookie(ctx, 'access_token')
}