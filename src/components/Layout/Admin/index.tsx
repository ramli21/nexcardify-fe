'use client'
import React, { useState, useEffect } from 'react'
import {
  PieChartOutlined,
  IdcardOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { useRouter, usePathname } from 'next/navigation'
import HeaderLayout from './header'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

// Mapping key ke path route
const routeMap: Record<string, string> = {
  '1': '/dashboard',
  '2': '/mycard',
  '3': '/mysite',
  '4': '/profile',
}

const pathToKeyMap: Record<string, string> = {
  '/dashboard': '1',
  '/mycard': '2',
  '/mysite': '3',
  '/profile': '4',
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('MyCard', '2', <IdcardOutlined />),
  getItem('MySite', '3', <GlobalOutlined />),
  getItem('Profile', '4', <UserOutlined />),
]

interface IProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname() // ambil current route

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  // Handler menu click navigasi
  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    const path = routeMap[key]
    if (path) {
      router.push(path)
    }
  }

  // Tentukan menu aktif dari route
  const selectedKey = pathToKeyMap[pathname] || '1' // default 1

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="py-5 text-center">
          <img
            src="/images/logo/NexCardify.png"
            alt="nexcardify Logo"
            className="mx-auto"
            style={{ height: 40 }}
          />
        </div>
        <Menu
          theme="dark"
          selectedKeys={[selectedKey]} // set menu aktif disini
          mode="inline"
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 20px',
            background: '#fff',
          }}
        >
          <HeaderLayout />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by nexcardify.com
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
