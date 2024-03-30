// import { checkSession, logoutSession } from '@/auth/session'
// import { NextRequest, NextResponse } from 'next/server'

// export async function middleware(request: NextRequest) {
//   // if (request.url.startsWith('/logout')) {
//   //   return logoutSession()
//   // }

//   // return checkSession(request, protectedRouters)
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }

// const protectedRouters = ['/feminino', '/masculino']

export { default } from 'next-auth/middleware'

export const config = { matcher: ['/masculino/:path*'] }
