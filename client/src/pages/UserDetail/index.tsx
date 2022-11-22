import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Account } from '../../types/account';
import { useGetAccountsById } from '../../utils/hooks/useGetAccountsById';
import AccountDetailTable from './components/AccountDetailTable';
import UserDetailTable from './components/UserDetailTable';

export default function UserDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Account[]>();

  const getAccounts = async () => {
    try {
      const response = await useGetAccountsById(id);
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

  return (
    <Container>
      <UserDetailTable />
      {accounts?.map((account, index) => (
        <AccountDetailTable account={account} key={index} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
