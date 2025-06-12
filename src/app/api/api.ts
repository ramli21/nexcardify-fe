import { message } from 'antd'
import axios from 'axios'
import { signOut } from 'next-auth/react'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export const Api = {
  get: async (path: string, token: any, params?: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : token,
      },
      params: params,
    }

    return await new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/${path}`, config)
        .then((result: any) => {
          return resolve(result.data)
        })
        .catch((error: any) => {
          if (error.code === 'ERR_NETWORK') {
            message.error({ content: error.message })
          } else {
            if (error.response.status === 401) {
              message.error({ content: 'user unauthorized to access.' })

              setTimeout(() => {
                signOut({
                  callbackUrl: '/login',
                })
              }, 1000)
            }
          }

          reject(error.response)
        })
    })
  },

  post: async (path: string, token: any, params?: any, with_file?: boolean) => {
    const config = {
      headers: {
        'Content-Type': with_file ? 'multipart/form-data' : 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : token,
      },
    }

    return await new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/${path}`, params, config)
        .then((result: any) => {
          return resolve(result.data)
        })
        .catch((error: any) => {
          if (error.response.status === 401) {
            message.error({ content: 'user unauthorized to access.' })

            // setTimeout(() => {
            //   signOut({
            //     callbackUrl: '/login',
            //   })
            // }, 1000)
          }

          reject(error.response)
        })
    })
  },

  getFile: async (path: string, token: any, params?: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : token,
        responseType: 'blob',
      },
      params: params,
    }

    return await new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/${path}`, config)
        .then((result: any) => {
          return resolve(result.data)
        })
        .catch((error: any) => {
          if (error.response.status === 401) {
            message.error({ content: 'user unauthorized to access.' })

            setTimeout(() => {
              signOut({
                callbackUrl: '/login',
              })
            }, 1000)
          }

          reject(error.response)
        })
    })
  },
}
