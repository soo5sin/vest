import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Pagenation from '../../../components/shared/pagenation/Pagenation';
import Spinner from '../../../components/shared/spinner/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { User } from '../../../types/user';
import { sliceArrayForPagenation } from '../../../utils/hooks/useSliceArrayForPagination';
import TableBody from './TableBody';

export default function Table() {
  const { data, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const limit = 20;
  const totalCount = data.length;

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
            sliceArrayForPagenation(data, page, limit).map((user: User, index) => (
              <TableBody user={user} key={index} />
            ))
          ) : (
            <tr>
              <Empty colSpan={12}>검색 결과가 없습니다.</Empty>
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
