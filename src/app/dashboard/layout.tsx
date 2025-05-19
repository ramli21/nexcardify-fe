import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

interface IProps {
  children: React.ReactNode
}

export default function RegisterLayout({ children }: IProps) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
