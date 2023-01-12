import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Header />
        <S.Main>
          <Outlet />
        </S.Main>
        <Footer />
      </S.Content>
    </S.Container>
  );
}

const S = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-height: 100vh;
  `,

  Container: styled.div`
    display: flex;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
};
