import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

interface IProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: IProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
