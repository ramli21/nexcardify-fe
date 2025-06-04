'use client';

import { useState } from 'react';
import Image from 'next/image';
import { List, Avatar, Typography, Button, Popconfirm, message, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Text, Title } = Typography;

const initialData = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Senior Developer at Codeify Inc.',
    email: 'john@example.com',
    avatar: '/default-avatar.png',
    image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg',
  },
  {
    id: 2,
    name: 'Aisyah Nurhaliza',
    title: 'Marketing Executive at Hijrah Corp.',
    email: 'aisyah@hijrah.id',
    avatar: '/default-avatar.png',
    image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9148/1_11609006_image_p1_common.jpg',
  },
  {
    id: 3,
    name: 'Michael Tan',
    title: 'Product Manager at Innovatech',
    email: 'michael.tan@innovatech.com',
    avatar: '/default-avatar.png',
    image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/12/14932_1.jpg',
  },
  {
    id: 4,
    name: 'Siti Rahmawati',
    title: 'UX Designer at Creativa',
    email: 'siti.rahmawati@creativa.com',
    avatar: '/default-avatar.png',
    image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9215/1_11709011_image_p1_common.jpg',
  },
  {
    id: 5,
    name: 'Daniel Lee',
    title: 'Data Scientist at DataMind',
    email: 'daniel.lee@datamind.io',
    avatar: '/default-avatar.png',
    image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/14/15432_1.jpg',
  },
  {
    id: 6,
    name: 'Lina Putri',
    title: 'Digital Marketer at SocialBee',
    email: 'lina.putri@socialbee.com',
    avatar: '/default-avatar.png',
    image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9222/1_11809009_image_p1_common.jpg',
  },
  {
    id: 7,
    name: 'Tommy Gunawan',
    title: 'Fullstack Developer at CodeBase',
    email: 'tommy.gunawan@codebase.dev',
    avatar: '/default-avatar.png',
    image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/15/15744_1.jpg',
  },
  {
    id: 8,
    name: 'Nadia Safira',
    title: 'Content Strategist at MediaPlus',
    email: 'nadia.safira@mediaplus.id',
    avatar: '/default-avatar.png',
    image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9235/1_11909012_image_p1_common.jpg',
  },
  {
    id: 9,
    name: 'Ricky Santoso',
    title: 'DevOps Engineer at Cloudify',
    email: 'ricky.santoso@cloudify.com',
    avatar: '/default-avatar.png',
    image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/16/16023_1.jpg',
  },
  {
    id: 10,
    name: 'Dewi Lestari',
    title: 'HR Manager at TalentHub',
    email: 'dewi.lestari@talenthub.co',
    avatar: '/default-avatar.png',
    image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9250/1_12009007_image_p1_common.jpg',
  },

];

export default function ListCardWithPreview() {
  const [data, setData] = useState(initialData);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  const selectedCard = data.find((item) => item.id === selectedId) || null;

  const handleAddCard = () => {
    const newId = Date.now();
    // Kalau kamu mau simpan data baru di state dulu bisa, tapi biasanya langsung ke detail page untuk input
    // Redirect ke halaman detail dengan id baru
    router.push(`/mycard-detail?id=${newId}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/mycard-detail?id=${id}`);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
    message.success(`Deleted card ID ${id}`);
    if (selectedId === id) setSelectedId(null);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: 24, gap: 24 }}>
      <div style={{ flex: 3, maxWidth: 700 }}>
        <Space style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddCard}
          >
            New Card
          </Button>
        </Space>

        <Title level={3}>List of Cards</Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                cursor: 'pointer',
                backgroundColor: item.id === selectedId ? '#f0f0f0' : 'transparent',
                borderRadius: 8,
                padding: '12px 16px',
              }}
              onClick={() => setSelectedId(item.id)}
              actions={[
                <Button
                  key="edit"
                  type="link"
                  icon={<EditOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(item.id);
                  }}
                >
                  Edit
                </Button>,
                <Popconfirm
                  key="delete"
                  title="Are you sure to delete this card?"
                  onConfirm={(e) => {
                    e?.stopPropagation();
                    handleDelete(item.id);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    danger
                    type="link"
                    icon={<DeleteOutlined />}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Delete
                  </Button>
                </Popconfirm>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<Text strong>{item.name}</Text>}
                description={
                  <>
                    <Text>{item.title}</Text>
                    <br />
                    <Text type="secondary">{item.email}</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>

      <div style={{ flex: 1, maxWidth: 400 }}>
        <Title level={4}>Preview Card</Title>
        {selectedCard && selectedCard.image ? (
          <Image
            src={selectedCard.image}
            alt="Preview"
            height={300}
            width={300}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Text type="secondary">Select a card from the list to preview.</Text>
        )}
      </div>
    </div>
  );
}
