'use client'

import { BarChart2, Eye, MousePointerClick } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Row, Col, Card, Typography, Space } from 'antd'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
)

const { Title, Text } = Typography

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Views',
      data: [120, 150, 170, 90, 200, 110, 140],
      borderColor: '#7e22ce',
      backgroundColor: 'rgba(126, 34, 206, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Clicks',
      data: [30, 45, 60, 20, 75, 35, 50],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' as const },
    tooltip: { mode: 'index' as const, intersect: false },
  },
  scales: { y: { beginAtZero: true } },
}

export default function CardStatsPage() {
  return (
    <div style={{ padding: 24 }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 32 }}>
        <Col>
          <Title level={3}>Hello, Zaenal 👋</Title>
          <Text type="secondary">
            Monitor your digital business card performance today.
          </Text>
        </Col>
        <Col>
          <Text type="secondary">May 22, 2025</Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} md={8}>
          <Card>
            <Space align="start">
              <div
                style={{
                  padding: 12,
                  backgroundColor: '#f3e8ff',
                  borderRadius: 12,
                }}
              >
                <Eye size={24} color="#7e22ce" />
              </div>
              <div>
                <Text type="secondary">Total Views</Text>
                <Title level={4} style={{ margin: 0 }}>
                  1,254
                </Title>
                <Text type="success" style={{ fontSize: 12 }}>
                  +12% compared to last week
                </Text>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Space align="start">
              <div
                style={{
                  padding: 12,
                  backgroundColor: '#dbeafe',
                  borderRadius: 12,
                }}
              >
                <MousePointerClick size={24} color="#2563eb" />
              </div>
              <div>
                <Text type="secondary">Total Clicks</Text>
                <Title level={4} style={{ margin: 0 }}>
                  678
                </Title>
                <Text type="danger" style={{ fontSize: 12 }}>
                  -5% compared to last week
                </Text>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Space align="start">
              <div
                style={{
                  padding: 12,
                  backgroundColor: '#dcfce7',
                  borderRadius: 12,
                }}
              >
                <BarChart2 size={24} color="#16a34a" />
              </div>
              <div>
                <Text type="secondary">Conversion Rate</Text>
                <Title level={4} style={{ margin: 0 }}>
                  54%
                </Title>
                <Text type="success" style={{ fontSize: 12 }}>
                  +7% increase
                </Text>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="Interaction Chart">
        <div style={{ height: 320 }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </Card>
    </div>
  )
}
