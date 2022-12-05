import { useState, useEffect } from 'react';
import Pagenation from '../../../components/shared/Pagenation';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Spinner from '../../../components/shared/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { Account } from '../../../types/account';
import { sliceArrayForPagenation } from '../../../utils/hooks/useSliceArrayForPagination';
import TbodyRow from './TbodyRow';
import { getUsersThunk } from '../../../store/reducers/users';

export default function Table() {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.accounts);
  const users = useAppSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const slicedAccounts = sliceArrayForPagenation(accounts.data, currentPage, limit);
  const totalCount = accounts.data.length;

  const getUsersAccounts = async () => {
    await Promise.all([dispatch(getAccountsThunk()), dispatch(getUsersThunk())]);
  };

  useEffect(() => {
    getUsersAccounts();
  }, [dispatch, currentPage]);

  if (accounts.isLoading || users.isLoading) return <Spinner />;
  if (accounts.error || users.error) return <Error error="data fetching error" />;

  return (
    <>
      <table>
        <Thead type="account" />
        <tbody>
          {accounts.data.length ? (
            slicedAccounts.map((account: Account, index) => (
              <TbodyRow account={account} key={index} users={users.data} />
            ))
          ) : (
            <tr>
              <Empty colSpan={9}>검색 결과가 없습니다.</Empty>
            </tr>
          )}
        </tbody>
      </table>
      <Pagenation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalCount={totalCount}
      />
    </>
  );
}

const Empty = styled.td`
  text-align: center;
  padding: 10px;
`;
