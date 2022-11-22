import styled from 'styled-components';
import SearchBar from '../../components/shared/searchBar/SearchBar';
import Table from './components/Table';
import { getAccountsThunk } from '../../store/reducers/accounts';

export default function Account() {
  return (
    <Container>
      <SearchBar getDataThunk={getAccountsThunk} />
      <Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</Ref>
      <Ref>※ 계좌 번호를 클릭하면 해당 계좌의 상세 페이지로 이동합니다.</Ref>
      <Table />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px;
  min-height: 100vh;
`;

const Ref = styled.div`
  font-size: 13px;
  text-align: right;
  color: ${({ theme }) => theme.palette.GRAY_300};
`;
