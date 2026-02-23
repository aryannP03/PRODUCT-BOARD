import { NextResponse } from 'next/server'

export function middleware(request) {
  // console.log("------------------------------Middle ware invoked------------------------------------");
  
    const authCookie = request.cookies.get('custom-token')?.value
  const { pathname } = request.nextUrl
  const routes = ['/dashboard', '/products']

  const isProtected = routes.some(route => (pathname.startsWith(route)))
  

  if (isProtected && !authCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*','/products/:path*'],
}





// import { NextResponse } from 'next/server'

// export function middleware(request) {
//   const token = request.cookies.get('token')
//   const { pathname } = request.nextUrl

//   const isProtectedRoute =
//     pathname.startsWith('/dashboard') ||
//     pathname.startsWith('/products')

//   if (isProtectedRoute && !token) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   if (pathname === '/login' && token) {
//     return NextResponse.redirect(new URL('/dashboard', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/products/:path*', '/login'],
// }
