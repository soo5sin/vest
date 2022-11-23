import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

export default function Layout() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Content>
    </Container>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
