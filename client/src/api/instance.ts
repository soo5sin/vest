import axios from 'axios';
import { ROUTE } from '../constants/route';
import { UserToken } from '../utils/userToken';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = UserToken.get();
  config.headers.set('Authorization', `Bearer ${token}`);
  config.paramsSerializer = {
    serialize: (params: Record<string, string>) => {
      return new URLSearchParams(params).toString();
    },
  };
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorStatus = error.response?.status;
    if (errorStatus === 401) {
      UserToken.remove();
      window.location.replace(ROUTE.LOGIN);
    }

    return Promise.reject(error);
  },
);

export default instance;
