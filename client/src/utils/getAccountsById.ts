import { AxiosError } from 'axios';
import api from '../api/instance';

export const getAccountsById = async (id: number | string | undefined | null) => {
  try {
    const response = await api.get(`/accounts?user_id=${id}`);
    const accounts = response.data;
    return accounts;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to get account information');
    }
  }
};
