'use client'
import { Badge, Button, Card, Col, Divider, message, Row, Space } from 'antd'
import RegisterStep from '../../components/registerStep'
import { Api } from '@/app/api/api'
import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons'

type dummyValuesType = {
  [key: string]: any
}

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [btnLloading, setBtnLoading] = useState(false)
  const [templates, setTemplates] = useState([])
  const [member, setMember] = useState<dummyValuesType>({})
  const [selected, setSelected] = useState({
    id: null,
    front_image:
      'https://res.cloudinary.com/dhjudl4yh/image/upload/v1750663912/Sample_Cards_g3ua3g.jpg',
  })
  let context: CanvasRenderingContext2D | null = null
  const { member_id } = useParams()
  const router = useRouter()

  const cardKeys = [
    'name',
    'email',
    'job_title',
    'company_name',
    'address',
    'phone_number',
    'website',
    'logo',
    'qr_code',
  ]

  const init = () => {
    setLoading(true)

    Api.get(`card-templates`).then((res: any) => {
      setTemplates(res.data)
    })

    Api.get(`members/${member_id}`)
      .then((res: any) => {
        setMember(res.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    init()
  }, [])

  const onSelectCard = (card: any) => {
    setSelected(card)
    onReset(card)
  }

  const onReset = (data: any) => {
    const canvas = canvasRef.current
    if (!canvas) return
    context = canvas.getContext('2d')

    if (!context) return

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    let image = new Image(context.canvas.width, context.canvas.height)
    image.crossOrigin = 'anonymous'
    // image.src = data?.front_image
    image.src =
      'https://res.cloudinary.com/dhjudl4yh/image/upload/v1751160576/5_rsbyhk.png'

    image.onload = () => {
      context?.drawImage(
        image,
        0,
        0,
        context.canvas.width,
        context.canvas.height
      )

      if (context) {
        for (const key in data.position) {
          if (cardKeys.includes(key)) {
            let rect = JSON.parse(data.position[key])
            // console.log(typeof rect === 'object', rect)

            if (typeof rect === 'object') {
              if (data.font_style[key]) {
                let font_style = JSON.parse(data.font_style[key])

                context.font =
                  font_style['fontsize'] + 'px ' + font_style['fontfamily']
                context.fillStyle = font_style['fontcolor']
              } else {
                context.font = '16px Arial'
                context.fillStyle = '#ff6b81'
              }

              if (['qr_code'].includes(key)) {
                let image = new Image(50, 50)
                image.crossOrigin = 'anonymous'
                // image.src =
                //   member['cards'][0]['website']['qr_code'] +
                //     '?not-from-cache-please' ||
                //   'https://res.cloudinary.com/dhjudl4yh/image/upload/v1750663972/image_1_azsplz.png' // https://nexcardify.my.id
                image.src =
                  'https://res.cloudinary.com/dhjudl4yh/image/upload/v1750663972/image_1_azsplz.png' // https://nexcardify.my.id

                image.onload = () => {
                  context?.drawImage(
                    image,
                    rect?.x + 10,
                    rect?.y + 20,
                    rect?.width,
                    rect?.width
                  )
                }
              } else {
                if (key === 'name') {
                  context.fillText(
                    member['full_name'],
                    rect?.x + 10,
                    rect?.y + 20
                  )
                } else if (key === 'address') {
                  const lines = member[key].split('\\n')

                  const lineHeight = 35
                  const y = rect?.y + 20
                  for (let i = 0; i < lines.length; i++) {
                    context.fillText(lines[i], rect?.x + 10, y + i * lineHeight)
                  }
                } else {
                  context.fillText(member[key], rect?.x + 10, rect?.y + 20)
                }
              }
            }
          }
        }
      }
    }
  }

  const onSubmit = () => {
    setBtnLoading(true)
    const canvas = canvasRef.current

    if (canvas) {
      const the_card = canvas.toDataURL('image/png')
      console.log('on submit = ', the_card)

      Api.post(`/cards/${member.cards[0].id}?_method=put`, {
        card_template_id: selected.id,
        my_card: the_card,
      })
        .then((res: any) => {
          message.success(res.message || 'You selected card!')

          router.push(`/register/${member_id}/done`)
        })
        .catch((err) => console.log(err))
        .finally(() => setBtnLoading(false))
    } else {
      message.error('please select the card.')
    }
  }

  return (
    <Row justify={`center`} className="my-5">
      <Col span={24}>
        <Card>
          <RegisterStep current={2} />

          <Divider />

          {loading ? (
            <Row justify="center" align="middle" className="h-36">
              <Col span={4} className="text-center">
                <LoadingOutlined style={{ fontSize: '3rem' }} />
                <p className="mt-5">Please Wait...</p>
              </Col>
            </Row>
          ) : (
            <Row gutter={[20, 25]}>
              <Col span={24}>
                <canvas
                  ref={canvasRef}
                  width={1050}
                  height={600}
                  style={{
                    border: '1px solid rgb(150, 150, 150)',
                    background: 'transparent',
                  }}
                >
                  <img
                    src={selected?.front_image}
                    alt="background-image"
                    width={'100%'}
                  />
                </canvas>
              </Col>
              <Col span={24}>
                <Row gutter={15}>
                  {templates.map((item: any, index) => (
                    <Col span={4}>
                      <Badge.Ribbon text="Simple" key={index}>
                        <Card
                          style={{
                            overflow: 'hidden',
                            marginBottom: '5px',
                          }}
                          bodyStyle={{ padding: 0 }}
                          onClick={() => onSelectCard(item)}
                        >
                          <img src={item?.preview_image} alt={item.name} />
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                  ))}
                </Row>

                <Divider />

                <Button
                  className="w-56"
                  size="large"
                  onClick={onSubmit}
                  icon={<CheckOutlined />}
                  loading={btnLloading}
                >
                  Select Card
                </Button>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default Page
