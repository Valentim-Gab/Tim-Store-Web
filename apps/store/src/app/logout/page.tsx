import { redirect } from 'next/navigation'

interface LogoutProps {
  searchParams: {
    callback?: string
  }
}

export default function Logout({ searchParams }: LogoutProps) {
  const url = searchParams.callback
    ? `/login?callback=${searchParams.callback}`
    : '/login'

  redirect(url)
}
