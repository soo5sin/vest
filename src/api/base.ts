import axios from 'axios';
import { UserToken } from '../utils/auth';

const token = UserToken.get();

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default baseApi;
