'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Tabs,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from 'antd';

const { Title, Text } = Typography;

export default function RegisterPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [agree, setAgree] = useState(false);

  const handleFinish = (values: any) => {
    if (!agree) {
      alert('Anda harus menyetujui Syarat dan Ketentuan.');
      return;
    }

    console.log('Submit data:', values);
    router.push('/personal-info');
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 px-4 py-10 min-h-screen">
      <div className="mb-4 text-center">
        <img src="/images/logo/NexCardify.png" alt="Logo" style={{ height: 48 }} />
        <Title level={3} style={{ marginTop: 8, marginBottom: 0 }}>Sign up for free!</Title>
      </div>

      <Card style={{ maxWidth: 400, width: '100%' }} bordered>
        <Tabs
          defaultActiveKey="personal"
          items={[
            {
              key: 'personal',
              label: 'Personal',
              children: (
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleFinish}
                  requiredMark={false}
                  style={{ marginTop: 12 }}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                    style={{ marginBottom: 16 }}
                  >
                    <Input placeholder="Enter your email" />
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
                    label="Confirmation Password"
                    name="confirmation_password"
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

                  <Form.Item
                    label="Phone Number"
                    name="phone_number"
                    rules={[{ required: true, message: 'Please enter your phone number!' }]}
                    style={{ marginBottom: 16 }}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 12 }}>
                    <Checkbox
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    >
                      I agree to the{' '}
                      <a href="/terms-of-service" target="_blank">Terms of Service</a> and{' '}
                      <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
                    </Checkbox>
                  </Form.Item>

                  <Form.Item style={{ marginTop: 8 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      disabled={!agree}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Register as Personal User
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: 'business',
              label: <span className="text-gray-400">Business (Coming Soon)</span>,
              disabled: true,
              children: null,
            },
          ]}
        />
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
          Already have an account?{' '}
          <a href="/login">Login</a>
        </Text>
      </Card>
    </div>
  );
}
