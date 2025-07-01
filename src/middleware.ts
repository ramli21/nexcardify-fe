import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl

    // Halaman yang seharusnya tidak bisa diakses jika user sudah login
    const authRestrictedRoutes = ['/login', '/register']

    // Cek jika user sudah login (memiliki token) DAN mencoba mengakses halaman yang dibatasi
    if (token && authRestrictedRoutes.includes(pathname)) {
      // Redirect ke dashboard atau halaman lain yang sesuai
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Logika untuk halaman yang memerlukan autentikasi
    const protectedRoutes = [
      '/dashboard', // Semua rute di bawah /dashboard/ akan dilindungi
    ]

    // Cek jika rute saat ini cocok dengan pola rute yang dilindungi
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    )

    // Khusus untuk /register/{member_id}, pastikan token ada
    const isSpecificRegisterRoute =
      pathname.startsWith('/register/') && pathname.length > '/register/'.length

    if ((isProtectedRoute || isSpecificRegisterRoute) && !token) {
      // Jika tidak ada token dan rute memerlukan autentikasi, redirect ke halaman login
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Izinkan akses jika sudah login atau rute tidak memerlukan autentikasi
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl

        // Rute yang TIDAK memerlukan autentikasi (tetapi mungkin dibatasi jika sudah login)
        const publicRoutes = ['/', '/about', '/login', '/register', '/terms']

        // Jika rute adalah publik dan user tidak login, izinkan akses
        if (publicRoutes.includes(pathname) && !token) {
          return true
        }

        // Jika rute adalah publik dan user sudah login, kita akan menanganinya di middleware utama di atas
        // Jadi, untuk callback authorized, kita hanya fokus pada rute yang membutuhkan login
        if (publicRoutes.includes(pathname) && token) {
          return true // Biarkan middleware utama yang mengarahkan
        }

        // Untuk semua rute lainnya, periksa apakah token ada
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
