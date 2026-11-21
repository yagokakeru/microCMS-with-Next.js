import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (auth) {
    const [user, pass] = atob(auth.split(' ')[1]).split(':')
    if (user === process.env.MANUAL_USER && pass === process.env.MANUAL_PASSWORD) {
      return NextResponse.next()
    }
  }
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="manual"' },
  })
}

export const config = { matcher: '/manual/:path*' }
