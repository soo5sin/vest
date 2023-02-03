import styled from 'styled-components';
import Button from '../../components/shared/Button';
import UserCards from './components/UserCards';
import NewUserForm from './components/NewUserForm';
import Modal from '../../components/shared/Modal';
import useModal from '../../hooks/useModal';

export default function User() {
  const { closeModalHandler, openModalHandler, isOpenModal } = useModal();

  return (
    <>
      <S.ButtonWrapper>
        <Button onClick={openModalHandler} colorTheme="lightGreen" size="small" borderRadius="5px">
          고객추가
        </Button>
      </S.ButtonWrapper>
      <S.Ref>※ 고객 카드를 클릭하면 해당 고객의 상세 페이지로 이동합니다.</S.Ref>
      <UserCards />
      <Modal isOpenModal={isOpenModal} closeModalHandler={closeModalHandler}>
        <NewUserForm closeModalHandler={closeModalHandler} />
      </Modal>
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
