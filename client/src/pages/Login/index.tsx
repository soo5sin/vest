import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import { UserToken } from '../../utils/userToken';
import styled from 'styled-components';
import logo from '../../assets/image/logo.jpg';
import { AxiosError } from 'axios';
import { useAppDispatch } from '../../store';
import { getUserId } from '../../store/reducers/auth';
import { signIn } from './hooks/useSignIn';

export default function Login() {
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onSubmitLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(loginInput);
      const receivedToken = response.accessToken;
      const receivedId = response.user.email;
      UserToken.set(receivedToken);
      dispatch(getUserId(receivedId));
      setLoginInput(INITIAL_LOGIN);
      navigate(ROUTE.MAIN);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        alert(error.response.data);
      } else {
        alert('로그인에 실패했습니다.');
      }
    }
  };

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.includes('@') && value.includes('.')) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setLoginInput({ ...loginInput, email: value });
  };

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length >= 4) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
    setLoginInput({ ...loginInput, password: value });
  };

  return (
    <>
      <S.Img src={logo} alt="fint logo" />
      <S.Form onSubmit={onSubmitLoginHandler}>
        <h1>LOGIN</h1>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={emailInputHandler}
          value={loginInput.email}
          required
        />
        {!isEmail && <div>이메일 형식이 아닙니다(@과 . 포함)</div>}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={passwordInputHandler}
          required
        />
        {!isPassword && <div>비밀번호는 4글자 이상입니다</div>}
        <S.Button type="submit" disabled={!isEmail || !isPassword}>
          로그인
        </S.Button>
      </S.Form>
    </>
  );
}

const S = {
  Img: styled.img`
    margin: 0 auto;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
  `,

  Form: styled.form`
    & > h1 {
      text-align: center;
      font-weight: bold;
      font-size: 1.3rem;
    }
    & > input {
      margin: 1rem 0 1rem 0;
      padding: 7px;
    }
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 0 auto;
  `,

  Button: styled.button`
    &:disabled {
      cursor: default;
      background: ${({ theme }) => theme.palette.GRAY_100};
    }
    background: ${({ theme }) => theme.palette.MAIN_COLOR};
    height: 50px;
    margin-top: 1rem;
    color: ${({ theme }) => theme.palette.WHITE};
  `,
};
