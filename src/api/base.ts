import axios from 'axios';
import { Console } from 'console';
import { UserToken } from '../utils/auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = UserToken.get();
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  config.paramsSerializer = {
    serialize: (params) => {
      return new URLSearchParams(params).toString();
    },
  };
  return config;
});

export default api;
