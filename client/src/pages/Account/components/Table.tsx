import { useState, useEffect } from 'react';
import Pagenation from '../../../components/shared/pagenation/Pagenation';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Spinner from '../../../components/shared/spinner/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { Account } from '../../../types/account';
import { sliceArrayForPagenation } from '../../../utils/hooks/useSliceArrayForPagination';
import TableBody from './TableBody';

export default function Table() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.accounts);
  const [page, setPage] = useState(1);
  const limit = 20;
  const totalCount = data.length;

  useEffect(() => {
    dispatch(getAccountsThunk());
  }, [page]);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <table>
        <Thead type="account" />
        <tbody>
          {data.length ? (
            sliceArrayForPagenation(data, page, limit).map((account: Account, index) => (
              <TableBody account={account} key={index} />
            ))
          ) : (
            <tr>
              <Empty colSpan={9}>검색 결과가 없습니다.</Empty>
            </tr>
          )}
        </tbody>
      </table>
      <Pagenation page={page} setPage={setPage} limit={limit} totalCount={totalCount} />
    </>
  );
}

const Empty = styled.td`
  text-align: center;
  padding: 10px;
`;
