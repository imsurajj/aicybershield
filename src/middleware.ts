import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If user is not signed in and the current path is /dashboard, redirect to /signin
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/signin', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  // If user is signed in and tries to access auth pages, redirect to dashboard
  if (session && (req.nextUrl.pathname.startsWith('/signin') || req.nextUrl.pathname.startsWith('/signup'))) {
    const redirectUrl = new URL('/dashboard', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/signup']
} 