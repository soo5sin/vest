import styled from 'styled-components';

export default function Footer() {
  return <S.Container>Copyright © December and Company Inc.</S.Container>;
}

const S = {
  Container: styled.footer`
    padding: 10px;
    text-align: center;
    background: ${({ theme }) => theme.palette.GRAY_50};
  `,
};
