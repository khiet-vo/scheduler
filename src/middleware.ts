import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, _resp: NextResponse) {
  
  const token = req.cookies.get('user-token')?.value;
  console.log('(╯°□°)╯ -- middleware -- token:', token)

  if (req.nextUrl.pathname.startsWith('/login') && !token) {
    return;
  }
  if (!req.nextUrl.pathname.startsWith('login') && token) {
    return NextResponse.redirect(new URL('/dashboard'));
  }
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}
export const config = {
  matcher: ['/dashboard', '/login'],
};
