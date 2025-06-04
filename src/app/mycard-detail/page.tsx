'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pencil } from 'lucide-react';
import { Input, Button, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function MyCardDetailPage() {
  const [avatar, setAvatar] = useState('/default-avatar.png');
  const [form, setForm] = useState({
    fullName: 'John Smith',
    nickname: '',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    job: 'Senior Developer',
    company: 'Codeify Inc.',
    address: '123 Silicon Valley Blvd, San Francisco, CA',
    website: 'www.johnsmith.dev',
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (info: any) => {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      const file = info.file.originFileObj;
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          setAvatar(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSave = () => {
    message.success('Data saved!');
    router.push(`/mycard`);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: 24 }}>
      {/* Form kiri */}
      <div style={{ flex: 3, paddingRight: 24, borderRight: '1px solid #ddd' }}>
        <Title level={3}>Your Card Settings</Title>

        <div style={{ marginBottom: 24, position: 'relative', width: 96, height: 96 }}>
          <Image
            src={avatar}
            alt="Logo"
            width={96}
            height={96}
            style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid #ddd' }}
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

        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <Input
            placeholder="Full Name"
            value={form.fullName}
            onChange={e => handleInputChange('fullName', e.target.value)}
          />
          <Input
            placeholder="Nickname (optional)"
            value={form.nickname}
            onChange={e => handleInputChange('nickname', e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => handleInputChange('email', e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => handleInputChange('phone', e.target.value)}
          />
        </div>

        <Input
          placeholder="Job"
          value={form.job}
          onChange={e => handleInputChange('job', e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <Input
          placeholder="Company"
          value={form.company}
          onChange={e => handleInputChange('company', e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <Input.TextArea
          placeholder="Address"
          rows={3}
          value={form.address}
          onChange={e => handleInputChange('address', e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <Input
          placeholder="Link Website"
          type="url"
          value={form.website}
          onChange={e => handleInputChange('website', e.target.value)}
          style={{ marginBottom: 24 }}
        />

        <Button type="primary" block onClick={handleSave}>
          Save
        </Button>
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
            src={'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg'}
            alt="Preview"
            height={300}
            width={300}
            style={{ objectFit: 'contain' }}
          />
      </div>
    </div>
  );
}
