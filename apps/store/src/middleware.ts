import { checkSession, logoutSession } from '@/auth/session'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/auth/signout')) {
    return await logoutSession()
  }

  if (
    request.nextUrl.pathname == '/auth' ||
    request.nextUrl.pathname.startsWith('/login')
  ) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return await checkSession(request, protectedRouters)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

const protectedRouters = ['/test', '/posty']
