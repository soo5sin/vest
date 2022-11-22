import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../store';
import { siderContent } from '../sidebar/Sidebar';

export default function Header() {
  const CurrentPage = useLocation().pathname;
  const email = useAppSelector((state) => state.auth.userId);

  const getCurrentMenuName = () => {
    const menuName = siderContent.find((sider) => sider.link.includes(CurrentPage))?.name;
    return menuName ? menuName : 'fint';
  };

  const menuName = useMemo(() => getCurrentMenuName(), [CurrentPage]);

  return (
    <>
      <Container>
        {menuName}
        <Email>{email}</Email>
      </Container>
    </>
  );
}

const Container = styled.footer`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.GRAY_100};
`;

const Email = styled.span`
  position: absolute;
  right: 10px;
`;
