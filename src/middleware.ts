import { withAuth } from 'next-auth/middleware';

export default withAuth({
  // Tidak ada `callbacks.authorized`, berarti semua user yang login bisa mengakses.
});

export const config = {
  matcher: ['/((?!login|forgot-password|favicon.ico|images).*)'],
};
