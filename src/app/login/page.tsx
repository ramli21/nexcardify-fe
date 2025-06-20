'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { FormProps } from 'antd'
import { Form, Input, Button, Typography, Card, message } from 'antd'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const { Title, Text } = Typography

type FieldType = {
  email?: string
  password?: string
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setLoading(true)

    signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/',
    })
      .then((callback) => {
        if (callback?.error) {
          message.error(callback?.error)

          setLoading(false)
          return
        }

        if (callback?.ok && !callback?.error) {
          message.success('Login successful')

          setLoading(false)
          router.push('/dashboard')
          router.refresh()
        }
      })
      .catch((err) => {
        setLoading(false)

        message.error(err.message)
      })
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <section style={styles.container}>
      <div style={styles.logoWrapper}>
        <Image
          src="/images/logo/NexCardify.png"
          alt="Logo"
          width={120}
          height={48}
        />
      </div>

      <Title level={3} style={styles.title}>
        Sign in to your account
      </Title>

      <Card style={styles.card}>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            email: 'zenstory12@gmail.com',
            password: '5t4r3e2w!Q',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <div style={{ textAlign: 'right', marginBottom: 12 }}>
            <Link href="/forgot-password" style={{ fontSize: 13 }}>
              Forgot Password?
            </Link>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary" style={styles.registerText}>
          Don&apos;t have an account? <Link href="/register">Register</Link>
        </Text>
      </Card>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoWrapper: {
    marginBottom: 16,
  },
  title: {
    color: '#333',
    marginBottom: 24,
  },
  card: {
    width: 400,
    borderRadius: 16,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    paddingTop: 8,
  },
  registerText: {
    display: 'block',
    textAlign: 'center',
    marginTop: 16,
  },
}
