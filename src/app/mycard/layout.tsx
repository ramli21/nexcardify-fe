import AdminLayout from '@/components/Layout/Admin'

interface IProps {
  children: React.ReactNode
}

export default async function MyCardLayout({ children }: IProps) {
  
  return (
    <AdminLayout>
      <main>{children}</main>
    </AdminLayout>
  )
}
