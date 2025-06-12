'use client';

import { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';
import { Input, Button, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { decryptId } from '@/utils/crypto';
import { Api } from '@api/api';
import Image from 'next/image';

const { Title, Text } = Typography;

export default function DetailCardWithPreview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const encryptedId = params.id;
  const id = decryptId(encryptedId);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await Api.get('user/members/' + id);
      setData(res?.data || []);
    } catch (error) {
      message.error(error?.data?.message || 'Failed to fetch cards');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCards();
  }, []);

  const [avatar, setAvatar] = useState('/default-avatar.png');
  const [form, setForm] = useState({
    full_name: '',
    nickname: '',
    email: '',
    phone_number: '',
    job_title: '',
    company_name: '',
    address: '',
    website: '',
  });

  useEffect(() => {
    if (data) {
      setForm((prev) => ({
        ...prev,
        full_name: data.full_name || '',
        email: data.email || '',
        phone_number: data.phone_number || '',
        job_title: data.job_title || '',
        company_name: data.company_name || '',
        address: data.address || '',
        website: data.website || '',
      }));
    }
  }, [data]);

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
            value={form.full_name}
            onChange={e => handleInputChange('full_name', e.target.value)}
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
            value={form.phone_number}
            onChange={e => handleInputChange('phone_number', e.target.value)}
          />
        </div>

        <Input
          placeholder="job_title"
          value={form.job_title}
          onChange={e => handleInputChange('job_title', e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <Input
          placeholder="company_name"
          value={form.company_name}
          onChange={e => handleInputChange('company_name', e.target.value)}
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
