import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/auth';
import { ROUTE } from '../../constants/routes';
import { UserToken } from '../../utils/auth';

function Login() {
  const navigate = useNavigate();
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };

  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(loginInput);
      UserToken.set(response.data.accessToken);
      navigate(ROUTE.MAIN);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitLoginHandler}>
      <header>로그인</header>
      <label htmlFor="email">이메일</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        onChange={onChangeInputHandler}
        value={loginInput.email}
        required
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="password"
        onChange={onChangeInputHandler}
        required
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
