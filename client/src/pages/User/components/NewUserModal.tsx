import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store';
import { addUserThunk } from '../../../store/reducers/user';
import { getUsersThunk } from '../../../store/reducers/users';
import { useStringToBoolean } from '../hooks/useStringToBoolean';

export default function NewUserModal({
  setIsOpenModal,
}: {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const INITIAL_USER = {
    id: null,
    uuid: '',
    photo: '',
    name: '',
    email: '',
    password: '0000',
    age: null,
    gender_origin: 1,
    birth_date: '',
    phone_number: '',
    address: '',
    detail_address: '',
    last_login: '',
    created_at: '',
    updated_at: '',
    allow_marketing_push: false,
    allow_invest_push: false,
    is_active: false,
    is_staff: false,
  };
  const dispatch = useAppDispatch();
  const [newUser, setNewUser] = useState(INITIAL_USER);
  const {
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    is_active,
    allow_marketing_push,
    is_staff,
  } = newUser;

  const submitNewUserForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addUserThunk(newUser));
    setNewUser(INITIAL_USER);
    setIsOpenModal(false);
    dispatch(getUsersThunk());
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: useStringToBoolean(value) });
  };

  return (
    <>
      <Background />
      <Form onSubmit={submitNewUserForm}>
        <label htmlFor="name">고객명</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="김핀트"
          onChange={onChangeInputHandler}
        />
        <Select>
          <label htmlFor="gender_origin">성별 코드</label>
          <select name="gender_origin" onChange={onChangeInputHandler} value={gender_origin}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </Select>
        <label htmlFor="birth_date">생년월일</label>
        <input
          type="text"
          id="birth_date"
          name="birth_date"
          value={birth_date}
          placeholder="0000-00-00"
          onChange={onChangeInputHandler}
        />
        <label htmlFor="phone_number">휴대폰번호</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          value={phone_number}
          placeholder="010-0000-0000"
          onChange={onChangeInputHandler}
        />
        <label htmlFor="email">이메일 주소</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          required
          placeholder="example@email.com"
          onChange={onChangeInputHandler}
        />
        <Select>
          <label htmlFor="allow_marketing_push">마케팅 수신 동의</label>
          <select
            name="allow_marketing_push"
            onChange={onChangeInputHandler}
            value={String(allow_marketing_push)}
          >
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </Select>
        <Select>
          <label htmlFor="is_staff">임직원 여부</label>
          <select name="is_staff" onChange={onChangeInputHandler} value={String(is_staff)}>
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </Select>
        <Select>
          <label htmlFor="is_active">활성화 여부</label>
          <select name="is_active" onChange={onChangeInputHandler} value={String(is_active)}>
            <option value="true">O</option>
            <option value="false">X</option>
          </select>
        </Select>
        <Wrapper>
          <Cancel onClick={() => setIsOpenModal(false)}>취소</Cancel>
          <Submit type="submit">등록</Submit>
        </Wrapper>
      </Form>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  background: black;
  opacity: 60%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  & > input {
    margin: 5px 0 10px 0;
    padding: 3px;
  }
  position: fixed;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  width: 25%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const Select = styled.div`
  & > label {
    margin-right: 10px;
  }
  margin: 5px 0 10px 0;
`;

const Wrapper = styled.div`
  & > button {
    margin-top: 15px;
    height: 35px;
    width: 45%;
    border-radius: 5px;
  }
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled.button`
  background: ${({ theme }) => theme.palette.GRAY_100};
`;

const Submit = styled.button`
  background: ${({ theme }) => theme.palette.SUB_200};
  color: ${({ theme }) => theme.palette.WHITE};
`;
