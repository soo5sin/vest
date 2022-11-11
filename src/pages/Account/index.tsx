import React, { useEffect, useState } from 'react';
import Thead from '../../components/table/thead';
import { useAppDispatch, useAppSelector } from '../../store';
import { getAccountsThunk } from '../../store/reducers/accounts';
import { Accounts } from '../../types/accounts';
import Tbody from './components/table/Tbody';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

function Account() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.accounts);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearchFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getAccountsThunk({ q: search }));
  };

  useEffect(() => {
    dispatch(getAccountsThunk());
  }, []);

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
      <Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</Ref>
      <Ref>※ 계좌 번호를 클릭하면 해당 계좌의 상세 페이지로 이동합니다.</Ref>
      <table>
        <Thead type="account" />
        <tbody>
          {data.slice(20 * (page - 1), 20 * (page - 1) + 20).map((accounts: Accounts, index) => (
            <Tbody accounts={accounts} key={index} page={page} />
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      ></Pagination>
    </Container>
  );
}

export default Account;

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

const Ref = styled.div`
  font-size: 13px;
  text-align: right;
  color: ${({ theme }) => theme.palette.GRAY_300};
`;
