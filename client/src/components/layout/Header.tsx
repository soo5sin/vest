import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserEmail } from '../../utils/userEmail';
import { siderContent } from './Sidebar';

export default function Header() {
  const CurrentPage = useLocation().pathname;
  const email = UserEmail.get();

  const getCurrentMenuName = () => {
    const currentMenuName = siderContent.find((sider) => sider.link.includes(CurrentPage))?.name;
    return currentMenuName ? currentMenuName : 'fint';
  };

  const currentMenuName = useMemo(() => getCurrentMenuName(), [CurrentPage]);

  return (
    <>
      <S.Container>
        <S.Menu>{currentMenuName}</S.Menu>
        <S.Email>{email}</S.Email>
      </S.Container>
    </>
  );
}

const S = {
  Container: styled.footer`
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.GRAY_100};
  `,
  Menu: styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.GRAY_500};
    font-size: 20px;
  `,
  Email: styled.span`
    position: absolute;
    right: 10px;
    color: ${({ theme }) => theme.palette.GRAY_500};
  `,
};
