import { useState } from 'react';
import { getUsersThunk } from '../../store/reducers/users';
import NewUserModal from './components/NewUserModal';
import styled from 'styled-components';
import SearchBar from '../../components/shared/searchBar/SearchBar';
import Table from './components/Table';

export default function User() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <SearchBar getDataThunk={getUsersThunk} />
      <AddButton onClick={() => setIsOpenModal(true)}>고객 추가</AddButton>
      <Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</Ref>
      <Table />
      {isOpenModal && <NewUserModal setIsOpenModal={setIsOpenModal} />}
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

const AddButton = styled.button`
  background: ${({ theme }) => theme.palette.SUB_100};
  padding: 3px 9px;
  text-align: center;
  margin: 0 0 5px auto;
  border-radius: 5px;
`;

const Ref = styled.div`
  font-size: 13px;
  text-align: right;
  color: ${({ theme }) => theme.palette.GRAY_300};
`;
