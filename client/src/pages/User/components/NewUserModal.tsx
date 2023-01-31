import React from 'react';
import styled from 'styled-components';
import Modal from '../../../components/shared/Modal';
import useNewUser from '../hooks/useNewUser';

export default function NewUserModal({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    onChangeInputHandler,
    submitForm,
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    is_active,
    allow_marketing_push,
    is_staff,
  } = useNewUser(setIsOpenModal);

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} submitForm={submitForm}>
      <>
        <label htmlFor="name">고객명</label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="김핀트"
          onChange={onChangeInputHandler}
        />
        <S.Select>
          <label htmlFor="gender_origin">성별 코드</label>
          <select name="gender_origin" onChange={onChangeInputHandler} value={gender_origin}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </S.Select>
        <label htmlFor="birth_date">생년월일</label>
        <S.Input
          type="text"
          id="birth_date"
          name="birth_date"
          value={birth_date}
          placeholder="0000-00-00"
          onChange={onChangeInputHandler}
        />
        <label htmlFor="phone_number">휴대폰번호</label>
        <S.Input
          type="text"
          id="phone_number"
          name="phone_number"
          value={phone_number}
          placeholder="010-0000-0000"
          onChange={onChangeInputHandler}
        />
        <label htmlFor="email">이메일 주소</label>
        <S.Input
          type="text"
          id="email"
          name="email"
          value={email}
          required
          placeholder="example@email.com"
          onChange={onChangeInputHandler}
        />
        <S.Select>
          <label htmlFor="allow_marketing_push">마케팅 수신 동의</label>
          <select
            name="allow_marketing_push"
            onChange={onChangeInputHandler}
            value={String(allow_marketing_push)}
          >
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </S.Select>
        <S.Select>
          <label htmlFor="is_staff">임직원 여부</label>
          <select name="is_staff" onChange={onChangeInputHandler} value={String(is_staff)}>
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </S.Select>
        <S.Select>
          <label htmlFor="is_active">활성화 여부</label>
          <select name="is_active" onChange={onChangeInputHandler} value={String(is_active)}>
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </S.Select>
      </>
    </Modal>
  );
}

const S = {
  Input: styled.input`
    margin: 5px 0 10px 0;
    padding: 14px;
    background-color: ${({ theme }) => theme.palette.GRAY_50};
  `,
  Select: styled.div`
    & > label {
      margin-right: 10px;
    }
    margin: 5px 0 10px 0;
  `,
};
