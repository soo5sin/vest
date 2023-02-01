import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/shared/Button';
import Spinner from '../../components/shared/Spinner';
import { Account } from '../../types/account';
import { getAccountsById } from '../../utils/getAccountsById';
import EditUserModal from './components/EditUserModal';
import useAccountsDetail from './hooks/useAccountsDetail';

const AccountDetailTable = lazy(() => import('./components/AccountDetailTable'));
const UserDetailTable = lazy(() => import('./components/UserDetailTable'));

export default function UserDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { accounts } = useAccountsDetail();

  return (
    <>
      <S.Container>
        <S.ButtonWrapper>
          <Button
            type="submit"
            size="small"
            colorTheme="default"
            borderRadius="8px"
            onClick={() => setIsOpenModal(true)}
          >
            수정
          </Button>
        </S.ButtonWrapper>
        <Suspense fallback={<Spinner />}>
          <UserDetailTable />
          <div>
            <S.Title>유저 계좌 목록</S.Title>
          </div>
          {accounts?.map((account, index) => (
            <AccountDetailTable account={account} key={index} />
          ))}
        </Suspense>
      </S.Container>
      <EditUserModal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
    </>
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
  ButtonWrapper: styled.div`
    width: 60px;
    margin-left: auto;
  `,
};
