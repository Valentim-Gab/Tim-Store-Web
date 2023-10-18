'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function FetchAuth(url: string, method: string) {
  const token = cookies().get('access_token')?.value

  const data = await fetch(url, {
    method: method,
    headers: {
      ContentType: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (data.status === 403) {
    // cookies().delete('access_token')
    redirect('/logout')
  }

  return data
}