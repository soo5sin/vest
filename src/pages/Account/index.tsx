import React, { useEffect, useState } from 'react';
import Thead from '../../components/table/thead';
import { useAppDispatch, useAppSelector } from '../../store';
import { getAccountsThunk } from '../../store/reducers/accounts';
import { Accounts } from '../../types/accounts';
import Tbody from './components/table/Tbody';
import Pagination from 'react-js-pagination';

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
    <>
      <form onSubmit={onSubmitSearchFormHandler}>
        <input
          type="text"
          value={search}
          onChange={onChangeSearchHandler}
          placeholder="검색어를 입력해주세요."
        ></input>
        <button type="submit">검색</button>
      </form>
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
    </>
  );
}

export default Account;
