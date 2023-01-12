import styled, { keyframes } from 'styled-components';

export default function Spinner() {
  return <S.LoadingSpinner />;
}

const spin = keyframes`
to{
  transform: rotate(360deg);
}`;

const S = {
  LoadingSpinner: styled.div`
    display: block;
    position: absolute;
    left: 50%;
    top: 30%;
    width: 50px;
    height: 50px;
    border: 4px solid ${({ theme }) => theme.palette.MAIN_COLOR};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.palette.SUB_200};
    animation: ${spin} 1s linear infinite;
  `,
};
