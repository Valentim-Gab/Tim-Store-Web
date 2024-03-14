import { redirect } from 'next/navigation'

interface LogoutProps {
  searchParams: {
    callback?: string
  }
}

export default function Signout({ searchParams }: LogoutProps) {
  const url = searchParams.callback
    ? `/auth/signin?callback=${searchParams.callback}`
    : '/auth/signin'

  redirect(url)
}
