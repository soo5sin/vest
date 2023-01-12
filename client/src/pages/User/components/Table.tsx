import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Pagenation from '../../../components/shared/Pagenation';
import Spinner from '../../../components/shared/Spinner';
import Thead from '../../../components/shared/table/Thead';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { User } from '../../../types/user';
import { sliceArrayForPagenation } from '../../../utils/hooks/useSliceArrayForPagination';
import TbodyRow from './TbodyRow';

export default function Table() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const slicedUsers = sliceArrayForPagenation(data, currentPage, limit);
  const totalCount = data.length;

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalCount]);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <table>
        <Thead type="user" />
        <tbody>
          {data.length ? (
            slicedUsers.map((user: User, index) => <TbodyRow user={user} key={index} />)
          ) : (
            <tr>
              <S.Empty colSpan={12}>검색 결과가 없습니다.</S.Empty>
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

const S = {
  Empty: styled.td`
    text-align: center;
    padding: 10px;
  `,
};
