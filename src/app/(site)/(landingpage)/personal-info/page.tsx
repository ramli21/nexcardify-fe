'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form, Input, Button, Typography, Card } from 'antd'

const { Title } = Typography

export default function PersonalInfoPage() {
  const router = useRouter()
  const [form] = Form.useForm()

  const [selectedField, setSelectedField] = useState('')
  const [otherField, setOtherField] = useState('')

  const fields = [
    'Software Engineer',
    'UI/UX Designer',
    'Product Manager',
    'Digital Marketing',
    'Customer Support',
    'Data Analyst',
    'Content Writer',
    'Finance',
    'Human Resources',
    'Sales',
    'Other',
  ]

  const handleSubmit = (values: any) => {
    const finalField = selectedField === 'Other' ? otherField : selectedField

    if (!finalField || (selectedField === 'Other' && !otherField)) {
      return form.setFields([
        {
          name: 'otherField',
          errors: ['Please specify your profession'],
        },
      ])
    }

    console.log('Full Name:', values.name)
    console.log('Profession:', finalField)
    console.log('Email:', values.email)
    console.log('Phone:', values.phone)

    router.push('/professional-info')
  }

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>

      <Card className="w-full max-w-md shadow-xl rounded-2xl px-6 py-8">
        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
          Personal Information
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          className="flex flex-col"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your full name' }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: 'email', message: 'Enter a valid email' },
            ]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Enter your phone number' }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item label="Select your area of profession" required>
            <div className="flex flex-wrap gap-2">
              {fields.map((field) => (
                <label
                  key={field}
                  onClick={() => setSelectedField(field)}
                  className={`cursor-pointer rounded-lg border px-3 py-1 text-sm transition-all
                      ${
                        selectedField === field
                          ? 'border-purple-600 text-purple-600 font-medium'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                >
                  {field}
                </label>
              ))}
            </div>
          </Form.Item>

          {selectedField === 'Other' && (
            <Form.Item
              name="otherField"
              rules={[
                { required: true, message: 'Please specify your profession' },
              ]}
            >
              <Input
                placeholder="Please specify your profession"
                value={otherField}
                onChange={(e) => setOtherField(e.target.value)}
              />
            </Form.Item>
          )}

          <Form.Item>
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
