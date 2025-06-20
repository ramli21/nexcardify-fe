'use client'

import { useState, useEffect } from 'react'
import { Pencil } from 'lucide-react'
import {
  Input,
  Button,
  Typography,
  Upload,
  message,
  Form,
  Row,
  Col,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { decryptId } from '@/utils/crypto'
import { Api } from '@api/api'
import Image from 'next/image'

const { Title, Text } = Typography

export default function DetailCardWithPreview() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const router = useRouter()

  const params = useParams()
  const encryptedId = params.id
  const id = decryptId(encryptedId.toString())

  const fetchCards = async () => {
    setLoading(true)

    await Api.get(`members/${id}`)
      .then((res: any) => {
        console.log(res.data)

        form.setFieldsValue(res.data)
      })
      .catch((err) => {
        message.error(err.message || 'Failed to fetch cards')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchCards()
  }, [])

  const [avatar, setAvatar] = useState('/default-avatar.png')
  // const [form, setForm] = useState({
  //   full_name: '',
  //   nickname: '',
  //   email: '',
  //   phone_number: '',
  //   job_title: '',
  //   company_name: '',
  //   address: '',
  //   website: '',
  // })

  // useEffect(() => {
  //   if (data) {
  //     // setForm((prev) => ({
  //     //   ...prev,
  //     //   full_name: data.full_name || '',
  //     //   email: data.email || '',
  //     //   phone_number: data.phone_number || '',
  //     //   job_title: data.job_title || '',
  //     //   company_name: data.company_name || '',
  //     //   address: data.address || '',
  //     //   website: data.website || '',
  //     // }))
  //   }
  // }, [data])

  // const handleInputChange = (field: string, value: string) => {
  //   // setForm((prev) => ({ ...prev, [field]: value }))
  // }

  const handleAvatarChange = (info: any) => {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      const file = info.file.originFileObj
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setAvatar(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleSave = (values: any) => {
    message.success('Data saved!', values)
    // router.push(`/mycard`)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: 24 }}>
      {/* Form kiri */}
      <div style={{ flex: 3, paddingRight: 24, borderRight: '1px solid #ddd' }}>
        <Title level={3}>Your Card Settings</Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          requiredMark={false}
        >
          <div
            style={{
              marginBottom: 24,
              position: 'relative',
              width: 96,
              height: 96,
            }}
          >
            <Image
              src={avatar}
              alt="Logo"
              width={96}
              height={96}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid #ddd',
              }}
            />
            <Upload
              showUploadList={false}
              beforeUpload={() => false} // supaya gak auto upload
              onChange={handleAvatarChange}
              accept="image/*"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '50%',
                padding: 4,
                cursor: 'pointer',
              }}
            >
              <Pencil size={20} color="#555" />
            </Upload>
          </div>

          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label="Full Name"
                name="full_name"
                rules={[
                  { required: true, message: 'Please input your full name!' },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Nickname"
                name="nickname"
                rules={[
                  { required: true, message: 'Please input your nickname!' },
                ]}
              >
                <Input placeholder="Nickname (optional)" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: 'Please input your email address!',
                  },
                ]}
              >
                <Input placeholder="Email" type="email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Job Title"
            name="job_title"
            rules={[
              { required: true, message: 'Please input your job title!' },
            ]}
          >
            <Input placeholder="job_title" />
          </Form.Item>

          <Form.Item label="Company Name" name="company name">
            <Input placeholder="company_name" />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input.TextArea placeholder="Address" rows={3} />
          </Form.Item>
          <Form.Item label="Website" name="website">
            <Input
              placeholder="Link Website"
              type="url"
              style={{ marginBottom: 24 }}
            />
          </Form.Item>

          <Button type="primary" block htmlType="submit">
            Save
          </Button>
        </Form>
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
        }}
      >
        <Image
          src={
            'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg'
          }
          alt="Preview"
          height={300}
          width={300}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
