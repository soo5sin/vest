import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Account } from '../../../types/account';
import { getAccountsById } from '../../../utils/getAccountsById';

export default function useAccountsDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Account[]>();

  const getAccounts = async () => {
    const accounts = await getAccountsById(id);
    setAccounts(accounts);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return {
    accounts,
  };
}
