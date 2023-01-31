import styled from 'styled-components';
import Button from './Button';

interface ModalProps {
  children: JSX.Element;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function Modal({ children, isOpenModal, setIsOpenModal, submitForm }: ModalProps) {
  return (
    <>
      {isOpenModal && (
        <>
          <S.Background />
          <S.Form onSubmit={submitForm}>
            {children}
            <S.ButtonWrapper>
              <Button type="button" colorTheme="gray" onClick={() => setIsOpenModal(false)}>
                취소
              </Button>
              <Button type="submit">등록</Button>
            </S.ButtonWrapper>
          </S.Form>
        </>
      )}
    </>
  );
}

const S = {
  Background: styled.div`
    position: fixed;
    background: black;
    opacity: 60%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  Form: styled.form`
    position: fixed;
    background: white;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    padding: 25px 30px;
    width: 25%;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  `,
  ButtonWrapper: styled.div`
    & > button {
      margin-top: 15px;
      width: 45%;
      border-radius: 5px;
    }
    display: flex;
    justify-content: space-between;
  `,
};
