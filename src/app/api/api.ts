import { message } from 'antd';
import axios from '@/utils/axiosInstance';
import { signOut } from 'next-auth/react';

function handleError(error: any) {
  if (error.code === 'ERR_NETWORK') {
    message.error({ content: error.message });
  } else if (error.response?.status === 401) {
    message.error({ content: 'User unauthorized to access.' });
    setTimeout(() => {
      signOut({ callbackUrl: '/login' });
    }, 1000);
  }

  throw error.response || error;
}

export const Api = {
  get: async (path: string, params?: any) => {
    try {
      const result = await axios.get(path, { params });
      return result.data;
    } catch (error) {
      handleError(error);
    }
  },

  post: async (path: string, params?: any, withFile: boolean = false) => {
    try {
      const headers = {
        'Content-Type': withFile ? 'multipart/form-data' : 'application/json',
      };
      const result = await axios.post(path, params, { headers });
      return result.data;
    } catch (error) {
      handleError(error);
    }
  },

  getFile: async (path: string, params?: any) => {
    try {
      const result = await axios.get(path, {
        params,
        responseType: 'blob',
      });
      return result.data;
    } catch (error) {
      handleError(error);
    }
  },
};
