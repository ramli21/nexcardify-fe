'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Row, Col, Image, Card, Button, Typography } from 'antd'

const { Title } = Typography

const templates = [
  {
    id: 'template1',
    image:
      'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg',
  },
  {
    id: 'template2',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9358/1_85824037_image_p1_common.jpg',
  },
  {
    id: 'template3',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9244/1_98102026_image_p1_common.jpg',
  },
  {
    id: 'template4',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9148/1_11609006_image_p1_common.jpg',
  },
  {
    id: 'template5',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9112/1_64732145_image_p1_common.jpg',
  },
  {
    id: 'template6',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9115/1_56233723_image_p1_common.jpg',
  },
  {
    id: 'template7',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9090/1_35637081_image_p1_common.jpg',
  },
  {
    id: 'template8',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9087/1_15217929_image_p1_common.jpg',
  },
  {
    id: 'template9',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9071/1_78148047_image_p1_common.jpg',
  },
  {
    id: 'template10',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9053/1_62817998_image_p1_common.jpg',
  },
  {
    id: 'template11',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9040/1_80294840_image_p1_common.jpg',
  },
  {
    id: 'template12',
    image:
      'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9044/1_54183322_image_p1_common.jpg',
  },
]

export default function TemplateSelectionPage() {
  const router = useRouter()
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedTemplate(id)
  }

  const handleContinue = () => {
    if (!selectedTemplate) {
      alert('Please select a template first.')
      return
    }

    router.push('/dashboard')
  }

  return (
    <div
      style={{ padding: 24, minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <img
          src="/images/logo/NexCardify.png"
          alt="Logo"
          style={{ height: 50 }}
        />
        <Title level={3} style={{ marginTop: 16 }}>
          Choose Your Business Card Template
        </Title>
      </div>

      <Row gutter={24}>
        <Col xs={24} md={4}>
          <div
            style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: 8 }}
          >
            {templates.map((template) => (
              <Card
                key={template.id}
                hoverable
                onClick={() => handleSelect(template.id)}
                bodyStyle={{ padding: 0 }} // hilangkan padding default Card agar image benar-benar penuh
                style={{
                  marginBottom: 16,
                  border:
                    selectedTemplate === template.id
                      ? '2px solid #722ed1'
                      : '1px solid #f0f0f0',
                  overflow: 'hidden',
                  borderRadius: 8,
                }}
                cover={
                  <div style={{ height: 120, overflow: 'hidden' }}>
                    <Image
                      src={template.image}
                      alt={template.id}
                      width="100%"
                      height="100%"
                      style={{ objectFit: 'cover' }}
                      preview={false}
                    />
                  </div>
                }
              />
            ))}
          </div>
        </Col>
        <Col xs={24} md={20}>
          <Card
            title=""
            bordered={false}
            style={{
              height: '100%',
              minHeight: '60vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedTemplate ? (
              <Image
                src={
                  templates.find((t) => t.id === selectedTemplate)?.image || ''
                }
                alt="Preview"
                height={300}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <p>Please select a template to preview.</p>
            )}
          </Card>
        </Col>
      </Row>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Button
          type="primary"
          size="large"
          onClick={handleContinue}
          disabled={!selectedTemplate}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
