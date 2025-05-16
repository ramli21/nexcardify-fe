import { Poppins } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

interface IProps {
  children: React.ReactNode
  params: { username: string }
}

export default function GuestLayout({ children, params }: IProps) {
  const { username } = params

  return <section>{children}</section>
}
