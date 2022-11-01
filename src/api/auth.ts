import { Sign } from '../types/auth';
import baseApi from './base';

export const signIn = ({ email, password }: Sign) => {
  return baseApi.post('/login', {
    email,
    password,
  });
};
