import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { User } from '../../../types/user';
import TbodyRow from './TbodyRow';

export default function Table() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  const getUsers = async () => {
    const response = await dispatch(getUsersThunk({ _page: page, _limit: 20 }));
    const length = response.payload.length;
    setHasMore(length === 20);
  };

  useEffect(() => {
    if (!inView || !hasMore || isLoading) return;
    setPage((prev) => prev + 1);
  }, [inView, hasMore]);

  useEffect(() => {
    getUsers();
  }, [page]);

  if (error) return <Error error={error} />;

  return (
    <>
      <table>
        <Thead type="user" />
        <tbody>
          {data.length ? (
            data.map((user: User, index) => <TbodyRow user={user} key={index} />)
          ) : (
            <tr>
              <S.Empty colSpan={12}>검색 결과가 없습니다.</S.Empty>
            </tr>
          )}
        </tbody>
      </table>
      <div ref={ref} />
      {isLoading && <S.Loading>Loading...</S.Loading>}
    </>
  );
}

const S = {
  Empty: styled.td`
    text-align: center;
    padding: 10px;
  `,
  Loading: styled.div`
    text-align: center;
    margin: 30px 0 30px 0;
    font-weight: bold;
  `,
};
