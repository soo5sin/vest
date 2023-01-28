import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/shared/Spinner';
import { Account } from '../../types/account';
import { getAccountsById } from '../../utils/getAccountsById';

const AccountDetailTable = lazy(() => import('./components/AccountDetailTable'));
const UserDetailTable = lazy(() => import('./components/UserDetailTable'));

export default function UserDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Account[]>();

  const getAccounts = async () => {
    const accounts = await getAccountsById(id);
    setAccounts(accounts);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <S.Container>
      <Suspense fallback={<Spinner />}>
        <UserDetailTable />
        <S.Title>유저 계좌 목록</S.Title>
        {accounts?.map((account, index) => (
          <AccountDetailTable account={account} key={index} />
        ))}
      </Suspense>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin: 0 auto;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  `,
};
