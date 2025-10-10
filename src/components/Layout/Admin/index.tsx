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
import Link from 'next/link'

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

const items: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    'dashboard',
    <PieChartOutlined />
  ),
  getItem(
    <Link href="/dashboard/mycard">MyCard</Link>,
    'users',
    <IdcardOutlined />
  ),
  getItem(
    <Link href="/dashboard/mysite">MySite</Link>,
    'cards',
    <GlobalOutlined />
  ),
  getItem(
    <Link href="/dashboard/profile">Profile</Link>,
    'profile',
    <UserOutlined />
  ),
]

interface IProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <>
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
          <Menu theme="dark" mode="inline" items={items} />
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
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                marginTop: 20,
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
    </>
  )
}

export default AdminLayout
