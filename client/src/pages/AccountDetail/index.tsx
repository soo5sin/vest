import styled from 'styled-components';
import DetailTable from './components/DetailTable';

export default function AccountDetail() {
  return (
    <>
      <Title>계좌 상세</Title>
      <DetailTable />
    </>
  );
}

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
