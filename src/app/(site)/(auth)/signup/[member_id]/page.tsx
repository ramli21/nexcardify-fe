'use client'

import React, { useEffect, useState } from 'react'
import {
  Card,
  Col,
  Divider,
  Form,
  Row,
  Button,
  Input,
  UploadFile,
  Upload,
  message,
} from 'antd'
import {
  LoadingOutlined,
  SaveOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import type { FormProps } from 'antd'
import { Check } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { Api } from '@/app/api/api'
import RegisterStep from '../components/registerStep'
import type { GetProp, UploadProps } from 'antd'

type FieldType = {
  full_name: string
  email: string
  phone_number: string
  job_title: string
  address?: string
  company_name: string
  website?: string
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const Page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form] = Form.useForm()
  const [loading, setloading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { member_id } = useParams()

  const propsPreviewImage: UploadProps = {
    accept: '.png,.jpg,.jpeg',
    maxCount: 1,
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file) => {
      setFileList([file])

      return false
    },
    fileList,
  }

  const init = () => {
    setPageLoading(true)
    Api.get(`members/${member_id}`)
      .then((res: any) => {
        console.log(res)
        form.setFieldsValue(res.data)
      })
      .finally(() => setPageLoading(false))
  }

  useEffect(() => {
    init()
  }, [])

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setloading(true)

    const formData = new FormData()

    fileList.forEach((file) => {
      formData.append('logo', file as FileType)
    })
    formData.append('full_name', values.full_name)
    formData.append('email', values.email)
    formData.append('job_title', values.job_title)
    formData.append('phone_number', values.phone_number)
    formData.append('company_name', values.company_name)
    formData.append('website', values.website || '')
    formData.append(
      'address',
      values.address?.replace(/(?:\r\n|\r|\n)/g, '\\n') || ''
    )

    Api.post(`members/${member_id}?_method=put`, formData, true)
      .then((res: any) => {
        message.success(res.message || 'Success to save your card data.')
        router.push(`/register/${member_id}/cards`)
      })
      .finally(() => setloading(false))
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify={`center`} className="my-5">
      <Col span={16}>
        <Card>
          <RegisterStep current={1} />

          <Divider />

          {pageLoading ? (
            <Row justify="center" align="middle" className="h-36">
              <Col span={4} className="text-center">
                <LoadingOutlined style={{ fontSize: '3rem' }} />
                <p className="mt-5">Please Wait...</p>
              </Col>
            </Row>
          ) : (
            <>
              <Form
                form={form}
                name="basic"
                layout="vertical"
                style={{ maxWidth: 600, margin: '50px auto 0' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  label="Full Name"
                  name="full_name"
                  rules={[
                    { required: true, message: 'Please input your full name!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Phone Number"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Job Title"
                  name="job_title"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Company Name (optional)"
                  name="company_name"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Website (optional)"
                  name="website"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                  label="Upload Logo"
                  name="preview_image"
                  extra="Exstensi : .png, .jpg, .jpeg"
                  rules={[
                    {
                      required: false,
                      message: 'Please input Upload Logo!',
                    },
                  ]}
                >
                  <Upload {...propsPreviewImage} style={{ display: 'block' }}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item label={null}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SaveOutlined />}
                    className="w-36"
                    loading={loading}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </>
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default Page
