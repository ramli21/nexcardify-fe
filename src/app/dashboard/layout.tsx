import AdminLayout from '@/components/Layout/Admin'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'

interface IProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: IProps) {
  const session = await getServerSession(options)

  // if the user has not logged in
  // if (!session) {
  //   redirect('/')
  // }

  return (
    <>
      <NextTopLoader
        color="#6556ff"
        shadow="0 0 10px #483dbd,0 0 5px #483dbd"
      />
      <AdminLayout>
        <main>{children}</main>
      </AdminLayout>
    </>
  )
}
