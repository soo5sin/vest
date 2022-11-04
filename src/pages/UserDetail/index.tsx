import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accounts } from '../../types/accounts';
import { useGetAccountsById } from '../../utils/hooks/useGetAccountsById';
import DetailTable from './components/DetailTable';
import UserAccounts from './components/UserAccounts';

function UserDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Accounts[]>();

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await useGetAccountsById(id);
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();
  }, []);

  return (
    <>
      <DetailTable />
      {accounts?.map((account, index) => (
        <UserAccounts account={account} key={index} />
      ))}
    </>
  );
}

export default UserDetail;
