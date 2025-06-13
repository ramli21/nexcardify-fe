'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, Input, Button, Typography, Card, message } from 'antd'
import { LoginPayload } from '@/services/types'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const { Title, Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: LoginPayload) => {
    setLoading(true)
    // try {
    //   // const response = await login(values);

    //   // localStorage.setItem('token', response.accessToken);
    //   // localStorage.setItem('user', JSON.stringify(response.user));

    //   // router.push('/dashboard');

    // } catch (error: any) {
    //   message.error(error.message);
    // } finally {
    //   setLoading(false);
    // }

    signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/dashboard',
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

  return (
    <section>
      <div>
        <Image
          src="/images/logo/NexCardify.png"
          alt="Logo"
          width={120}
          height={48}
        />
      </div>

      <Title level={3}>Sign</Title>

      <Card>
        <Form layout="vertical" onFinish={handleSubmit} requiredMark={false}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
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

        <Text type="secondary">
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
