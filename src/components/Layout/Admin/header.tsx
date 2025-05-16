import {
  LogoutOutlined,
  RetweetOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Space, Button, Dropdown } from 'antd'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Button
        type="link"
        size="small"
        onClick={() =>
          signOut({
            callbackUrl: '/',
          })
        }
        danger
      >
        <LogoutOutlined /> Logout
      </Button>
    ),
  },
]

const HeaderLayout = () => {
  return (
    <div className="flex flex-row-reverse py-4">
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Button shape="circle" type="dashed">
          <UserOutlined />
        </Button>
      </Dropdown>
    </div>
  )
}

export default HeaderLayout
