'use client'

import { useState } from 'react'
import { Button, Typography, Input, message, Modal, List, Space } from 'antd'
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography

interface Product {
  id: number
  name: string
  price: number
}

export default function MyCardDetailPage() {
  const router = useRouter()

  const [digitalCardUrl, setDigitalCardUrl] = useState('johnsmith')
  const [avatar, setAvatar] = useState('/default-avatar.png')
  const [form, setForm] = useState({
    fullName: 'John Smith',
    nickname: '',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    job: 'Senior Developer',
    company: 'Codeify Inc.',
    address: '123 Silicon Valley Blvd, San Francisco, CA',
    website: 'www.johnsmith.dev',
  })

  // Produk
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newProductName, setNewProductName] = useState('')
  const [newProductPrice, setNewProductPrice] = useState<number | undefined>(
    undefined
  )

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-z0-9-]*$/.test(value)) {
      setDigitalCardUrl(value)
    }
  }

  const handleSave = () => {
    if (!digitalCardUrl) {
      message.error('URL digital card tidak boleh kosong.')
      return
    }
    message.success('Data saved!')
    router.push(`/mycard/${digitalCardUrl}`)
  }

  const openAddProductModal = () => {
    setNewProductName('')
    setNewProductPrice(undefined)
    setIsModalOpen(true)
  }

  const handleAddProduct = () => {
    if (!newProductName.trim()) {
      message.error('Nama produk tidak boleh kosong')
      return
    }
    if (
      newProductPrice === undefined ||
      isNaN(newProductPrice) ||
      newProductPrice <= 0
    ) {
      message.error('Harga produk harus lebih dari 0')
      return
    }
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newProductName.trim(),
        price: newProductPrice,
      },
    ])
    setIsModalOpen(false)
  }

  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: 24 }}>
      {/* Form kiri */}
      <div style={{ flex: 3, paddingRight: 24, borderRight: '1px solid #ddd' }}>
        <Title level={3}>Your Digital Card URL</Title>

        <Text style={{ marginBottom: 8, display: 'block' }}>
          Customize your digital card URL. Only lowercase letters, numbers, and
          dashes allowed.
        </Text>

        <Input
          prefix="https://yourdomain.com/mycard/"
          placeholder="your-url"
          value={digitalCardUrl}
          onChange={handleUrlChange}
          style={{ marginBottom: 16 }}
          maxLength={30}
        />

        <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
          Your card will be accessible at:{' '}
          <a
            href={`https://yourdomain.com/mycard/${digitalCardUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            https://yourdomain.com/mycard/{digitalCardUrl}
          </a>
        </Text>

        {/* Add Produk */}
        <Button
          type="default"
          block
          onClick={openAddProductModal}
          style={{ marginBottom: 16 }}
        >
          Add Product
        </Button>

        {/* List Produk */}
        <List
          header={<Text strong>Products</Text>}
          bordered
          dataSource={products}
          locale={{ emptyText: 'No products added' }}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  danger
                  type="link"
                  onClick={() => handleDeleteProduct(item.id)}
                  key="delete"
                >
                  Delete
                </Button>,
              ]}
            >
              <Space>
                <Text>{item.name}</Text>
                <Text type="secondary"> - IDR {item.price.toFixed(2)}</Text>
              </Space>
            </List.Item>
          )}
          style={{ maxHeight: 250, overflowY: 'auto' }}
        />

        <Button
          type="primary"
          block
          onClick={handleSave}
          style={{ marginBottom: 24, marginTop: 25 }}
        >
          Save
        </Button>

        {/* Modal Add Product */}
        <Modal
          title="Add New Product"
          visible={isModalOpen}
          onOk={handleAddProduct}
          onCancel={() => setIsModalOpen(false)}
          okText="Add"
        >
          <Input
            placeholder="Product Name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <Input
            placeholder="Price (USD)"
            type="number"
            min={0}
            step={0.01}
            value={newProductPrice !== undefined ? newProductPrice : ''}
            onChange={(e) => setNewProductPrice(parseFloat(e.target.value))}
          />
        </Modal>
      </div>

      {/* Preview kanan */}
      <div
        style={{
          flex: 2,
          padding: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {/* Kartu Digital */}
        <div
          style={{
            borderRadius: 16,
            padding: 24,
            width: 320,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            boxShadow: '0 8px 24px rgba(118, 75, 162, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <img
            src={avatar}
            alt="Avatar"
            width={96}
            height={96}
            style={{
              borderRadius: '50%',
              border: '3px solid white',
              objectFit: 'cover',
            }}
          />
          <Title level={3} style={{ color: 'white', marginBottom: 0 }}>
            {form.fullName}
            {form.nickname ? ` (${form.nickname})` : ''}
          </Title>
          <Text
            style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center' }}
          >
            {form.job} at {form.company}
          </Text>
          <Text style={{ color: 'rgba(255,255,255,0.7)' }}>{form.email}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.7)' }}>{form.phone}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
            {form.address}
          </Text>
          <a
            href={`https://${form.website}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'underline',
              wordBreak: 'break-word',
              marginTop: 12,
            }}
          >
            {form.website}
          </a>
        </div>

        {/* Preview Produk */}
        <div style={{ width: 320 }}>
          <Title level={4}>Your Products</Title>
          {products.length === 0 ? (
            <Text type="secondary">No products added yet.</Text>
          ) : (
            <List
              dataSource={products}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item.name}</Text> -{' '}
                  <Text>IDR {item.price.toFixed(2)}</Text>
                </List.Item>
              )}
              bordered
              size="small"
            />
          )}
        </div>
      </div>
    </div>
  )
}
