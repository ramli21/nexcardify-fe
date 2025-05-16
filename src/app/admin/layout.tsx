import AdminLayout from '@/components/Layout/Admin'

interface IProps {
  children: React.ReactNode
}

export default function RegisterLayout({ children }: IProps) {
  return (
    <AdminLayout>
      <main>{children}</main>
    </AdminLayout>
  )
}
