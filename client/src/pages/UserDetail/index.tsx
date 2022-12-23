import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/shared/Spinner';
import { Account } from '../../types/account';
import { useGetAccountsById } from '../../utils/hooks/useGetAccountsById';

const AccountDetailTable = lazy(() => import('./components/AccountDetailTable'));
const UserDetailTable = lazy(() => import('./components/UserDetailTable'));

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
    <Suspense fallback={<Spinner />}>
      <UserDetailTable />
      {accounts?.map((account, index) => (
        <AccountDetailTable account={account} key={index} />
      ))}
    </Suspense>
  );
}
