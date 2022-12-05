import api from '../../../api/instance';
import { Sign } from '../../../types/auth';

export const signIn = async ({ email, password }: Sign) => {
  const response = await api.post('/login', {
    email,
    password,
  });
  return response.data;
};
