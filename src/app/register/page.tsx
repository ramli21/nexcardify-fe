'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Checkbox, Typography, Card, message } from 'antd';
import { Api } from '@/app/api/api';
import { RegisterPayload } from '@/services/types';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function RegisterPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleFinish = async (values: RegisterPayload) => {
    if (!agree) {
      message.warning('You must agree to the Terms and Privacy Policy.');
      return;
    }

    const payload = {
      ...values,
      agree: true,
    };

    setLoading(true);

    try {
      const response = await Api.post('auth/register', payload);
      message.success(response.message || 'Registration successful!');
    
      const loginCallback = await signIn('credentials', {
        redirect: false,
        callbackUrl: '/',
        ...payload,
      });

      if (loginCallback?.error) {
        message.error(loginCallback.error);
        return;
      }

      if (loginCallback?.ok && !loginCallback?.error) {
        router.push('/dashboard');
        router.refresh();
      }

    } catch (err: any) {
      const errorData = err?.data;
      if (errorData?.message) {
        message.error(errorData.message);
      }

      if (errorData?.errors) {
        const setError: { name: string; errors: string[] }[] = [];

        Object.keys(errorData.errors).forEach((key: string) => {
          setError.push({
            name: key,
            errors: errorData.errors[key],
          });
        });

        form.setFields(setError);
      } else {
        message.error('Registration failed');
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 px-4 py-10 min-h-screen">
      <div className="mb-4 text-center">
        <Image src="/images/logo/NexCardify.png" alt="Logo" width={120} height={48} />
        <Title level={3} style={{ marginTop: 8, marginBottom: 0 }}>Sign up for free!</Title>
      </div>

      <Card style={{ maxWidth: 400, width: '100%' }} bordered>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
          style={{ marginTop: 12 }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
            style={{ marginBottom: 16 }}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Invalid email format!' },
            ]}
            style={{ marginBottom: 16 }}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[{ required: true, message: 'Please enter your phone number!' }]}
            style={{ marginBottom: 16 }}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            style={{ marginBottom: 16 }}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="password_confirmation"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
            style={{ marginBottom: 16 }}
          >
            <Input.Password placeholder="Re-enter your password" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 12 }}>
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            >
              I agree to the{' '}
              <Link href="/terms-of-service" target="_blank">Terms of Service</Link> and{' '}
              <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>.
            </Checkbox>
          </Form.Item>

          <Form.Item style={{ marginTop: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              disabled={!agree}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
          Already have an account?{' '}
          <Link href="/login">Login</Link>
        </Text>
      </Card>
    </div>
  );
}
