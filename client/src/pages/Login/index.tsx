import styled from 'styled-components';
import logo from '../../assets/image/logo.jpg';
import useInput from '../../hooks/useInput';
import { authValidator } from '../../utils/auth';
import Button from '../../components/shared/Button';
import useLogin from './hooks/useSignIn';

export default function Login() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { onSubmitLoginHandler } = useLogin({ email, password });

  return (
    <>
      <S.Logo>vest🍀</S.Logo>
      <S.Form onSubmit={onSubmitLoginHandler}>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input
          type="text"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={onChangeEmail}
          value={email}
          required
        />
        {!authValidator('email', email) && (
          <S.ErrorMessage>⚠️ 이메일은 @과 .을 포함시켜주세요</S.ErrorMessage>
        )}
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
          value={password}
          required
        />
        {!authValidator('password', password) && (
          <S.ErrorMessage>⚠️ 비밀번호는 4글자 이상입니다</S.ErrorMessage>
        )}
        <Button type="submit" size="medium" colorTheme="default">
          로그인
        </Button>
      </S.Form>
    </>
  );
}

const S = {
  Logo: styled.div`
    font-size: 50px;
    text-align: center;
    font-family: fantasy;
    margin: 30px 0;
    color: ${({ theme }) => theme.palette.MAIN_COLOR};
    font-weight: bold;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 0 auto;
  `,
  Label: styled.label`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.GRAY_500};
  `,

  Input: styled.input`
    margin: 1rem 0 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    &:focus {
      outline-color: ${({ theme }) => theme.palette.SUB_100};
    }
  `,
  ErrorMessage: styled.div`
    color: red;
    margin-bottom: 1rem;
  `,

  Button: styled.button`
    background: ${({ theme }) => theme.palette.MAIN_COLOR};
    height: 50px;
    margin-top: 1rem;
    color: ${({ theme }) => theme.palette.WHITE};
  `,
};
