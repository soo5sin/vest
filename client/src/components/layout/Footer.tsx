import styled from 'styled-components';

export default function Footer() {
  return <Container>Copyright © December and Company Inc.</Container>;
}

const Container = styled.footer`
  padding: 10px;
  text-align: center;
  background: ${({ theme }) => theme.palette.GRAY_50};
`;
