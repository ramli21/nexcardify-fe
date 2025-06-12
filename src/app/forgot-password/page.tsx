'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { ForgotPayload } from '@/services/types';
import { Api } from '../api/api';
import Image from 'next/image';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: ForgotPayload) => {
    setLoading(true);
    try {
      const res = await Api.post('auth/request-reset', null, values);
      message.success(res.message || 'The password reset link has been sent to your email.');
      setTimeout(() => router.push('/login'), 2000);
    } catch (error: any) {
      message.error(error?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section style={styles.container}>
      <div style={styles.logoWrapper}>
        <Image src="/images/logo/NexCardify.png" alt="Logo" width={120} height={48} />
      </div>

      <Title level={3} style={styles.title}>Forgot Password</Title>

      <Card style={styles.card}>
        <Form layout="vertical" onFinish={handleSubmit} requiredMark={false}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Format email tidak valid' },
            ]}
            style={{ marginBottom: 16 }}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <Text type="secondary" style={styles.backLoginText}>
          <Link href="/login">Back to Login</Link>
        </Text>
      </Card>
    </section>
  );
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
  backLoginText: {
    display: 'block', 
    textAlign: 'center', 
    marginTop: 16
  },
};
