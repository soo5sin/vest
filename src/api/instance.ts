import axios from 'axios';
import { ROUTE } from '../constants/routes';
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
    serialize: (params: Record<string, string>) => {
      return new URLSearchParams(params).toString();
    },
  };
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorStatus = error.response?.status;
    if (errorStatus === 401) {
      alert('유효한 인증 정보가 없습니다. 다시 로그인해 주세요.');
      UserToken.remove();
      window.location.replace(ROUTE.LOGIN);
    }

    return Promise.reject(error);
  },
);

export default api;
