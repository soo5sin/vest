import React, { useEffect, useState } from 'react';
import Thead from '../../components/table/thead';
import { useAppDispatch, useAppSelector } from '../../store';
import { getAccountsThunk } from '../../store/reducers/accounts';
import { Accounts } from '../../types/accounts';
import Tbody from './components/table/Tbody';

function Account() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.accounts);
  const [search, setSearch] = useState('');

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
          {data.map((accounts: Accounts, index) => (
            <Tbody accounts={accounts} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Account;
