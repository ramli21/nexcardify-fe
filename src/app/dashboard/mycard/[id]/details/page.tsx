'use client'

import { decryptId } from '@/utils/crypto'
import { Col, Input, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import { useParams } from 'next/navigation'

const DetailCard = () => {
  const params = useParams()
  const encryptedId = params.id
  const id = decryptId(encryptedId.toString())

  return (
    <>
      <Row>
        <Col>
          <Title>Detail card #{id}</Title>
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        <Col span={14}>
          <Input value={`https://nexcardify.com/ahmad-ramli`} disabled />
        </Col>
        <Col span={10} className="text-center">
          Preview Card / Preview Site
        </Col>
      </Row>
    </>
  )
}

export default DetailCard
