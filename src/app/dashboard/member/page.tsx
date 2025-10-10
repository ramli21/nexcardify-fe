'use client'

import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Col, Input, Row, Space, Table } from 'antd'
import Meta from 'antd/es/card/Meta'

const Page = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      status: 'active',
      active_until: '30/10/2025',
      site_url: 'https://google.com',
    },
    {
      key: '2',
      name: 'John',
      status: 'active',
      active_until: '30/12/2025',
      site_url: 'https://google.com',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Website',
      dataIndex: 'site_url',
      key: 'site_url',
    },
    {
      title: 'Active Until',
      dataIndex: 'active_until',
      key: 'active_until',
    },
    {
      title: 'Action',
      dataIndex: 'data',
      key: 'data',
      width: 150,
      render: (data: any) => (
        <Space>
          <Button size="small" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button size="small" icon={<DeleteOutlined />} danger>
            Nonactive
          </Button>
          <Button size="small" icon={<DeleteOutlined />} danger>
            Remove
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <>
      <h1 className="text-3xl mb-5 font-semibold">Daftar Member</h1>

      <Input
        placeholder="Search Name"
        size="large"
        variant="borderless"
        style={{
          borderTop: '1px solid rgba(0,0,0,.25)',
          borderBottom: '1px solid rgba(0,0,0,.25)',
          borderRadius: '0',
          fontSize: '1.2rem',
        }}
        suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      />

      <Row gutter={[25, 25]} className="mt-5">
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  )
}

export default Page
