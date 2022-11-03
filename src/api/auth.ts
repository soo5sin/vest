import { Sign } from '../types/auth';
import api from './base';

export const signIn = ({ email, password }: Sign) => {
  return api.post('/login', {
    email,
    password,
  });
};
