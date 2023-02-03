import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Button from '../../components/shared/Button';
import Modal from '../../components/shared/Modal';
import Spinner from '../../components/shared/Spinner';
import useModal from '../../hooks/useModal';
import EditUserForm from './components/EditUserForm';
import useAccountsDetail from './hooks/useAccountsDetail';

const AccountDetailTable = lazy(() => import('./components/AccountDetailTable'));
const UserDetailTable = lazy(() => import('./components/UserDetailTable'));

export default function UserDetail() {
  const { accounts } = useAccountsDetail();
  const { isOpenModal, closeModalHandler, openModalHandler } = useModal();

  return (
    <>
      <S.Container>
        <S.ButtonWrapper>
          <Button
            type="submit"
            size="small"
            colorTheme="default"
            borderRadius="8px"
            onClick={openModalHandler}
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
      <Modal isOpenModal={isOpenModal} closeModalHandler={closeModalHandler}>
        <EditUserForm closeModalHandler={closeModalHandler} />
      </Modal>
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
