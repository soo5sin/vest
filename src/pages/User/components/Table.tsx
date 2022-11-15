import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Spinner from '../../../components/shared/spinner/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { User } from '../../../types/user';
import { sliceArrayForPagenation } from '../../../utils/hooks/useSliceArrayForPagination';
import TableBody from './TableBody';

function Table() {
  const { data, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <table>
        <Thead type="user" />
        <tbody>
          {data.length ? (
            sliceArrayForPagenation(data, page).map((user: User, index) => (
              <TableBody user={user} key={index} />
            ))
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
    </>
  );
}

export default Table;

const Empty = styled.td`
  text-align: center;
  padding: 10px;
`;
