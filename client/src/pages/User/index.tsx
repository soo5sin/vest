import { useState, lazy, Suspense } from 'react';
import NewUserModal from './components/NewUserModal';
import styled from 'styled-components';
import Spinner from '../../components/shared/Spinner';
import Button from '../../components/shared/Button';

const Table = lazy(() => import('./components/Table'));

export default function User() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <S.ButtonWrapper>
        <Button
          type="submit"
          onClick={() => setIsOpenModal(true)}
          colorTheme="mint"
          size="small"
          borderRadius="5px"
        >
          고객추가
        </Button>
      </S.ButtonWrapper>
      <S.Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</S.Ref>
      <Suspense fallback={<Spinner />}>
        <Table />
      </Suspense>
      {isOpenModal && <NewUserModal setIsOpenModal={setIsOpenModal} />}
    </>
  );
}

const S = {
  Ref: styled.div`
    font-size: 13px;
    text-align: right;
    color: ${({ theme }) => theme.palette.GRAY_500};
  `,
  ButtonWrapper: styled.div`
    width: 5rem;
    margin: 0 0 0.3rem auto;
  `,
};
