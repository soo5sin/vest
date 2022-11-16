import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import { UserToken } from '../../utils/userToken';
import styled from 'styled-components';
import logo from '../../assets/image/logo.jpg';
import { AxiosError } from 'axios';
import api from '../../api/instance';
import { Sign } from '../../types/auth';

function Login() {
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN);

  const signIn = ({ email, password }: Sign) => {
    return api.post('/login', {
      email,
      password,
    });
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(loginInput);
      const receivedToken = response.data.accessToken;
      UserToken.set(receivedToken);
      navigate(ROUTE.MAIN);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        alert(error.response.data);
      } else {
        alert('로그인에 실패했습니다.');
      }
    }
  };

  return (
    <>
      <Img src={logo} alt="fint logo" />
      <Form onSubmit={onSubmitLoginHandler}>
        <h1>LOGIN</h1>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={onChangeInputHandler}
          value={loginInput.email}
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeInputHandler}
          required
        />
        <button type="submit">로그인</button>
      </Form>
    </>
  );
}

export default Login;

const Img = styled.img`
  margin: 0 auto;
  height: 10rem;
  object-fit: cover;
`;

const Form = styled.form`
  & > h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  & > input {
    margin-bottom: 1.5rem;
    padding: 7px;
  }
  & > button {
    background: ${({ theme }) => theme.palette.MAIN_COLOR};
    height: 50px;
    color: ${({ theme }) => theme.palette.WHITE};
  }
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
`;
