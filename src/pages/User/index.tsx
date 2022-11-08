import React, { useEffect, useState } from 'react';
import Thead from '../../components/table/thead';
import Tbody from './components/Tbody';
import { useAppDispatch, useAppSelector } from '../../store';
import { getUsersThunk } from '../../store/reducers/users';
import { Users } from '../../types/user';
import NewUserModal from './components/NewUserModal';
import Pagination from 'react-js-pagination';

function User() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.users);
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
    dispatch(getUsersThunk({ q: search }));
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

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
      <NewUserModal />
      <table>
        <Thead type="user" />
        <tbody>
          {data.slice(20 * (page - 1), 20 * (page - 1) + 20).map((users: Users, index) => (
            <Tbody users={users} key={index} />
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

export default User;
