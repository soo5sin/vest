import styled from 'styled-components';
import DetailTable from './components/DetailTable';

export default function AccountDetail() {
  return (
    <Container>
      <Title>계좌 상세</Title>
      <DetailTable />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
