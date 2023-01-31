import { useState } from 'react';
import NewUserModal from './components/NewUserModal';
import styled from 'styled-components';
import Button from '../../components/shared/Button';
import UserCards from './components/UserCards';

export default function User() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <S.ButtonWrapper>
        <Button
          onClick={() => setIsOpenModal(true)}
          colorTheme="lightGreen"
          size="small"
          borderRadius="5px"
        >
          고객추가
        </Button>
      </S.ButtonWrapper>
      <S.Ref>※ 고객 카드를 클릭하면 해당 고객의 상세 페이지로 이동합니다.</S.Ref>
      <UserCards />
      <NewUserModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
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
