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
        <Outlet />
        <Footer />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
