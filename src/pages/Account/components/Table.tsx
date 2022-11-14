import react, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Spinner from '../../../components/shared/spinner/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { Account } from '../../../types/account';
import TableBody from './TableBody';

function Table() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.accounts);
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(getAccountsThunk());
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <table>
        <Thead type="account" />
        <tbody>
          {data.length ? (
            data
              .slice(20 * (page - 1), 20 * (page - 1) + 20)
              .map((accounts: Account, index) => <TableBody accounts={accounts} key={index} />)
          ) : (
            <tr>
              <Empty colSpan={9}>검색 결과가 없습니다.</Empty>
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
      ></Pagination>
    </>
  );
}

export default Table;

const Empty = styled.td`
  text-align: center;
  padding: 10px;
`;
