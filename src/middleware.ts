import { withAuth } from 'next-auth/middleware'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === 'user'
      },
    },
  }
)
export const config = {
  // matcher: ['/((?!login|forgot|favicon.ico|images).*)'],
  matcher: [
    '/((?!login|forgot|favicon.ico|images|register|/|).*)', // daftar halaman yang tidak perlu akses token
    '/dashboard',
    '/dashboard/:path*',
  ],
}
