import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Account } from '../../types/account';
import { useGetAccountsById } from '../../utils/hooks/useGetAccountsById';
import AccountDetailTable from './components/AccountDetailTable';
import UserDetailTable from './components/UserDetailTable';

export default function UserDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Account[]>();

  const getAccounts = async () => {
    const accounts = await useGetAccountsById(id);
    setAccounts(accounts);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <>
      <UserDetailTable />
      {accounts?.map((account, index) => (
        <AccountDetailTable account={account} key={index} />
      ))}
    </>
  );
}
