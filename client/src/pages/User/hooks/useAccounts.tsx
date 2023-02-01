import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import instance from '../../../api/instance';
import { Account } from '../../../types/account';

export default function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const getAccounts = async () => {
    try {
      const response = await instance.get<Account[]>('/accounts');
      setAccounts(response.data);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get account information');
      }
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return {
    accounts,
  };
}
