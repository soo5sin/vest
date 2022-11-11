import React, { useEffect, useState } from 'react';
import '../../styles/paging.css';
import Thead from '../../components/table/thead';
import Tbody from './components/Tbody';
import { useAppDispatch, useAppSelector } from '../../store';
import { getUsersThunk } from '../../store/reducers/users';
import { Users } from '../../types/user';
import NewUserModal from './components/NewUserModal';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

function User() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.users);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearchFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getUsersThunk({ q: search }));
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  if (!data) return <div>로딩 중</div>;

  return (
    <Container>
      <Search onSubmit={onSubmitSearchFormHandler}>
        <input
          type="text"
          value={search}
          onChange={onChangeSearchHandler}
          placeholder="검색어를 입력해주세요."
        ></input>
        <button type="submit">검색</button>
      </Search>

      <AddButton onClick={() => setIsOpenModal(true)}>고객 추가</AddButton>
      <Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</Ref>
      {isOpenModal && <NewUserModal setIsOpenModal={setIsOpenModal} />}
      <table>
        <Thead type="user" />
        <tbody>
          {data.length ? (
            data
              .slice(20 * (page - 1), 20 * (page - 1) + 20)
              .map((users: Users, index) => <Tbody users={users} key={index} />)
          ) : (
            <tr>
              <Empty colSpan={12}>검색 결과가 없습니다.</Empty>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </Container>
  );
}

export default User;
const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px;
  min-height: 100vh;
`;

const Search = styled.form`
  & > input {
    padding: 3px;
    width: 26rem;
    margin-right: 10px;
  }
  & > button {
    background-color: ${({ theme }) => theme.palette.SUB_200};
    height: 100%;
    padding: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.palette.WHITE};
  }
  margin: 0 auto 20px auto;
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

const Empty = styled.td`
  text-align: center;
  padding: 10px;
`;
