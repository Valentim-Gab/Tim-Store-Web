'use client'

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { destroyCookie } from "nookies";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/logout')) {
    //equest.cookies.delete('access_token')

    //const response = NextResponse.next()
    //response.cookies.set('access_token', 'AAH')
    destroyCookie({res: NextResponse}, 'access_token')
    //cookies().delete('access_token')
    console.log(request.cookies.get('access_token'))


    return NextResponse.redirect(new URL('/login', request.url))
  }
  
}

export const config = {
  matcher: '/logout'
}