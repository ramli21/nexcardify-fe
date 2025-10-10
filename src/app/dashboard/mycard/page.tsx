'use client'

import { useState, useEffect } from 'react'
import {
  List,
  Avatar,
  Typography,
  Button,
  Popconfirm,
  message,
  Space,
  Divider,
  Image,
  Row,
  Col,
  Card,
} from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  AreaChartOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { Api } from '@api/api'
import { encryptId } from '@/utils/crypto'
import Link from 'next/link'

const { Text, Title } = Typography

export default function ListCardWithPreview() {
  const [data, setData] = useState<Array<any>>([])
  const [loading, setLoading] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const router = useRouter()

  const selectedCard = data ? data.find((item) => item.id === selectedId) : null

  const fetchCards = async () => {
    setLoading(true)
    try {
      const res = await Api.get('user/my-cards') // asumsi ini endpoint-nya
      setData(res?.data || [])
    } catch (error: any) {
      message.error(error?.data?.message || 'Failed to fetch cards')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  const handleAddCard = () => {
    const newId = Date.now()
    // Kalau kamu mau simpan data baru di state dulu bisa, tapi biasanya langsung ke detail page untuk input
    // Redirect ke halaman detail dengan id baru
    router.push(`/mycard-detail?id=${newId}`)
  }

  const handleEdit = (id: number) => {
    const encryptedId = encryptId(id)

    router.push(`/mycard/${encryptedId}`)
  }

  const handleDelete = (id: number) => {
    if (data) {
      setData(data.filter((item) => item.id !== id))
    }

    message.success(`Deleted card ID ${id}`)
    if (selectedId === id) setSelectedId(null)
  }

  return (
    <>
      <Space className="w-full" style={{ justifyContent: 'space-between' }}>
        <Title level={3}>List of Cards</Title>
        <Link href={'/dashboard/mycard/create'}>
          <Button icon={<PlusOutlined />} type="primary">
            Add Card
          </Button>
        </Link>
      </Space>
      <Divider />

      {loading ? (
        <div className="text-center py-10">
          <LoadingOutlined className="text-5xl" />
          <p className="mt-2">Please wait...</p>
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            <div className="text-center py-10 w-50">
              <p className="text-2xl text-gray-400">Belum ada kartu.</p>
            </div>
          ) : (
            <Row>
              {data.map((item, idx) => (
                <Col span={8} key={idx}>
                  <Card
                    cover={
                      <Image
                        className="border-x border-t border-[#f0f0f0]"
                        src={item.my_card}
                      />
                    }
                    actions={[
                      <Link
                        href={`/dashboard/mycard/${encryptId(item.id)}/details`}
                      >
                        <Button type="link" icon={<AreaChartOutlined />}>
                          Details
                        </Button>
                      </Link>,
                      <Link href={`/dashboard/mycard/${encryptId(item.id)}`}>
                        <Button type="link" icon={<EditOutlined />}>
                          Edit
                        </Button>
                      </Link>,
                      <Button type="link" icon={<DeleteOutlined />} danger>
                        Delete
                      </Button>,
                    ]}
                  ></Card>
                </Col>
              ))}
            </Row>
          )}
        </>
      )}

      {/* <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button key="edit" type="link" icon={<EditOutlined />}>
                Edit
              </Button>,
              <Popconfirm
                key="delete"
                title="Are you sure to delete this card?"
                onConfirm={(e) => {
                  e?.stopPropagation()
                  handleDelete(item.id)
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  danger
                  type="link"
                  icon={<DeleteOutlined />}
                  onClick={(e) => e.stopPropagation()}
                >
                  Delete
                </Button>
              </Popconfirm>,
            ]}
            extra={<Image width={272} alt="logo" src={item.my_card} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Text strong>{item.full_name}</Text>}
              description={
                <>
                  <Text>
                    {item.job_title} - {item.company_name}
                  </Text>
                  <br />
                  <Text type="secondary">{item.email}</Text>
                </>
              }
            />
          </List.Item>
        )}
      /> */}
    </>
  )
}
