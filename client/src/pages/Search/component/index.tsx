import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Thead from '../../../components/shared/table/Thead';
import { User } from '../../../types/user';
import TbodyRow from '../../User/components/TbodyRow';
import useSearch from '../hooks';

export default function SearchResult() {
  const { search, ref } = useSearch();

  if (search.error) return <Error error={search.error} />;

  return (
    <>
      <table>
        <Thead type="user" />
        <tbody>
          {search.data.length ? (
            search.data.map((user: User, index) => <TbodyRow user={user} key={index} />)
          ) : (
            <tr>
              <S.Empty colSpan={12}>검색 결과가 없습니다.</S.Empty>
            </tr>
          )}
        </tbody>
      </table>
      <div ref={ref} />
      {search.isLoading && <S.Loading>Loading...</S.Loading>}
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
