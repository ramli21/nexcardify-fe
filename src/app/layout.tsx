import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { NextAuthProvider } from './NexAuthProvider'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(options)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#5340FE', // Warna utama custom (ungu NexCardify)
                },
              }}
            >
              <NextAuthProvider session={session}>{children}</NextAuthProvider>
            </ConfigProvider>
          </AntdRegistry>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
