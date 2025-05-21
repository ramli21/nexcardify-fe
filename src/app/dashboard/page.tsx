'use client';

import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { EyeOutlined, ClickOutlined } from '@ant-design/icons';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  // Data contoh, nanti bisa diganti dari API / state
  const totalViews = 1234;
  const totalClicks = 567;

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Views"
              value={totalViews}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Clicks"
              value={totalClicks}
              prefix={<ClickOutlined />} // Icon custom, bisa ganti jika ingin
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
