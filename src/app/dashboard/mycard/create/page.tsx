'use client'

import { Button, Col, Form, Input, Row, Upload } from 'antd'
import Title from 'antd/es/typography/Title'
import type { FormProps, UploadFile, UploadProps } from 'antd'
import { SaveOutlined, UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'

type FieldType = {
  full_name: string
  email: string
  phone_number: string
  job_title: string
  address?: string
  company_name: string
  website?: string
}

const CreateCards = () => {
  const [form] = Form.useForm()
  const [loading, setloading] = useState(false)
  const [fileList, setFileList] = useState<UploadFile[]>([])

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

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('on submit : ', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Row justify={'center'}>
        <Col className="text-center">
          <Title level={3}>Create a new card</Title>
        </Col>
      </Row>

      <Row justify={'center'}>
        <Col xs={24} sm={24} md={16} lg={14} xl={12}>
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
        </Col>
      </Row>
    </>
  )
}

export default CreateCards
