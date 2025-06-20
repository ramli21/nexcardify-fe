'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form, Input, Button, Typography, Card } from 'antd'

const { Title } = Typography

export default function ProfessionalInfoPage() {
  const router = useRouter()

  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = () => {
    console.log({ company, address, website })
    router.push('/theme')
  }

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <Title level={3} className="text-center mb-6">
          Professional Info
        </Title>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="flex flex-col"
        >
          <Form.Item
            label="Company"
            name="company"
            style={{ marginBottom: 12 }}
          >
            <Input
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            style={{ marginBottom: 12 }}
          >
            <Input
              placeholder="Company Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Link Website"
            name="website"
            style={{ marginBottom: 12 }}
          >
            <Input
              placeholder="https://yourcompany.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="url"
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-purple-600 hover:bg-purple-700"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  )
}
