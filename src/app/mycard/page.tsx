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
} from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { Api } from '@api/api'
import { encryptId } from '@/utils/crypto'
import Image from 'next/image'

const { Text, Title } = Typography

export default function ListCardWithPreview() {
  const [data, setData] = useState<Array<any> | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const router = useRouter()

  const selectedCard = data ? data.find((item) => item.id === selectedId) : null

  const fetchCards = async () => {
    setLoading(true)
    try {
      const res = await Api.get('members') // asumsi ini endpoint-nya
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
    <div style={{ display: 'flex', minHeight: '100vh', padding: 24, gap: 24 }}>
      <div style={{ flex: 3, maxWidth: 700 }}>
        <Space style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddCard}
          >
            New Card
          </Button>
        </Space>

        <Title level={3}>List of Cards</Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                cursor: 'pointer',
                backgroundColor:
                  item.id === selectedId ? '#f0f0f0' : 'transparent',
                borderRadius: 8,
                padding: '12px 16px',
              }}
              onClick={() => setSelectedId(item.id)}
              actions={[
                <Button
                  key="edit"
                  type="link"
                  icon={<EditOutlined />}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleEdit(item.id)
                  }}
                >
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
        />
      </div>

      <div style={{ flex: 1, maxWidth: 400 }}>
        <Title level={4}>Preview Card</Title>
        {selectedCard && selectedCard.image ? (
          <Image
            src={selectedCard.image}
            alt="Preview"
            height={300}
            width={300}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Text type="secondary">Select a card from the list to preview.</Text>
        )}
      </div>
    </div>
  )
}
