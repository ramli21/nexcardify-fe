// import AdminLayout from '@/components/Layout/Admin'
// import { getServerSession } from 'next-auth'
// import { options } from '../api/auth/[...nextauth]/options'
// import { redirect } from 'next/navigation'

// interface IProps {
//   children: React.ReactNode
// }

// export default async function DashboardLayout({ children }: IProps) {
//   const session = await getServerSession(options)

//   // if the user has not logged in
//   // if (!session) {
//   //   redirect('/')
//   // }

//   return (
//     <AdminLayout>
//       <main>{children}</main>
//     </AdminLayout>
//   )
// }


import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

interface IProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: IProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
