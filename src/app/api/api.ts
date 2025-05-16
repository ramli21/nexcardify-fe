import { signOut } from 'next-auth/react'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const Api = {
  fetch: async (
    path: string,
    method: string,
    token: any,
    params?: any,
    with_file?: boolean
  ) => {
    const config = {
      method: method,
      headers: {
        ContentType: with_file ? 'multipart/form-data' : 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : token,
      },
      params: params,
    }

    return await new Promise((resolve, reject) => {
      fetch(`${API_URL}/${path}`, config)
        .then((res: any) => resolve(res.data))
        .catch((error: any) => {
          if (error.code === 'ERR_NETWORK') {
            console.log(error.message)

            // message.error({ content: error.message })
          } else {
            if (error.response.status === 401) {
              // message.error({ content: 'user unauthorized to access.' })
              console.log('user unauthorized to access')

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
}
