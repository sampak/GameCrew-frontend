import axios from 'axios';
import { getToken } from './user';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API ?? 'http://localhost:4000',
  headers: {
    'content-type': 'application/json',
  },
});

const reqInterceptor = async (config: any) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.authorization = await getToken();
  return config;
};

axiosInstance.interceptors.request.use(reqInterceptor);
