import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { Account } from '../../../types/account';
import TbodyRow from './TbodyRow';
import { getUsersThunk } from '../../../store/reducers/users';
import { useInView } from 'react-intersection-observer';

export default function AccountListBox() {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.reducers.accounts);
  const users = useAppSelector((state) => state.reducers.users);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  const getAccounts = async () => {
    const response = await dispatch(getAccountsThunk({ _page: page, _limit: 20 }));
    const length = response.payload.length;
    setHasMore(length === 20);
  };

  useEffect(() => {
    if (!inView || !hasMore || accounts.isLoading || users.isLoading) return;
    setPage((prev) => prev + 1);
  }, [inView, hasMore]);

  useEffect(() => {
    getAccounts();
  }, [page]);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  if (accounts.error || users.error) return <Error error="data fetching error" />;

  return (
    <>
      <table>
        <Thead type="account" />
        <tbody>
          {accounts.data.length ? (
            accounts.data.map((account: Account, index) => (
              <TbodyRow account={account} key={index} users={users.data} />
            ))
          ) : (
            <tr>
              <S.Empty colSpan={9}>검색 결과가 없습니다.</S.Empty>
            </tr>
          )}
        </tbody>
      </table>
      <div ref={ref} />
      {accounts.isLoading && <S.Loading>Loading...</S.Loading>}
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
