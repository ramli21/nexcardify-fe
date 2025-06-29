'use client'

import { notFound, useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Form, Input, Button, Typography, Card, message, Row, Col } from 'antd'
import Image from 'next/image'
import { Api } from '../api/api'
import { LoadingOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export default function MemberSite() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [dataSite, setDataSite] = useState<any>({})

  const { slug } = useParams()

  const init = async () => {
    setLoading(true)

    await Api.get(`members/site/${slug}`)
      .then((res) => {
        console.log(res)
        setDataSite(res.data)
      })
      .catch((err) => {
        console.log(err)

        if (err.data.status === false) {
          setDataSite(false)
        }
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (dataSite === false) notFound()
  }, [dataSite])

  return (
    <>
      {loading ? (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
          <Col span={4} className="text-center">
            <LoadingOutlined style={{ fontSize: '3rem' }} />
            <p className="mt-5">Please Wait...</p>
          </Col>
        </Row>
      ) : (
        <section>Halaman Detail User {slug}</section>
      )}
    </>
  )
}
