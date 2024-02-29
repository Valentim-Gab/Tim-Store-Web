import { checkSession, logoutSession } from '@/auth/session'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/logout')) {
    return await logoutSession()
  }

  return await checkSession(request, protectedRouters)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

const protectedRouters = ['/test', '/posty']