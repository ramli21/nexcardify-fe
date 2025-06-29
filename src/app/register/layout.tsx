import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

interface IProps {
  children: React.ReactNode
}

export default async function RegisterLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <Layout className="pt-[120px]">
        <Content className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <main>{children}</main>
        </Content>
      </Layout>
      <Footer />
    </>
  )
}
