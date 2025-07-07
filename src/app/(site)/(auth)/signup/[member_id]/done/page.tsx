'use client'
import { Button, Card, Col, Divider, Image, Row } from 'antd'
import RegisterStep from '../../components/registerStep'
import { useEffect, useState } from 'react'
import { Api } from '@/app/api/api'
import { useParams, useRouter } from 'next/navigation'
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons'

const Done = () => {
  const [loading, setLoading] = useState(true)
  const [member, setMember] = useState<any>({})
  const [myCard, setMyCard] = useState<any>({})
  const { member_id } = useParams()
  const router = useRouter()

  const init = () => {
    setLoading(true)

    Api.get(`members/${member_id}`)
      .then((res: any) => {
        setMember(res.data)
        setMyCard(res.data.cards[0])
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    init()
  }, [])

  const gotoDashboard = () => {
    router.push(`/dashboard`)
  }

  return (
    <Row justify={`center`} className="my-5">
      <Col span={24}>
        <Card>
          <RegisterStep current={3} />

          <Divider />

          {loading ? (
            <Row justify="center" align="middle" className="h-36">
              <Col span={4} className="text-center">
                <LoadingOutlined style={{ fontSize: '3rem' }} />
                <p className="mt-5">Please Wait...</p>
              </Col>
            </Row>
          ) : (
            <Row justify="center" align="middle">
              <Col span={12} className="text-center">
                <h1 className="text-xl font-bold">
                  Conratulations, your card is active now!
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis porro dolores facilis. Suscipit rem quia quasi dolorum
                  consequatur sequi molestiae, illo, optio ea corporis.
                </p>

                <div style={{ width: '600px' }} className="border m-auto">
                  <Image
                    srcSet={myCard?.my_card}
                    width={'100%'}
                    height={'auto'}
                    alt="my-card"
                  />
                </div>

                <Button
                  className="w-56 mt-4"
                  size="large"
                  icon={<CheckOutlined />}
                  onClick={gotoDashboard}
                >
                  Done!
                </Button>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default Done
