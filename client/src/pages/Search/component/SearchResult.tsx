import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Spinner from '../../../components/shared/Spinner';
import UserCard from '../../User/components/UserCard';
import useAccounts from '../../User/hooks/useAccounts';
import useSearch from '../hooks/useSearch';

export default function SearchResult() {
  const { search, ref } = useSearch();
  const { accounts } = useAccounts();

  if (search.error) return <Error error={search.error} />;

  return (
    <>
      <S.Container>
        {search.data.length ? (
          search.data.map((user, index) => {
            const userAccounts = accounts.filter((account) => user.id === account.user_id);
            return <UserCard key={index} user={user} userAccounts={userAccounts} />;
          })
        ) : (
          <div>검색 결과가 없습니다😵‍💫</div>
        )}
        <div ref={ref} />
      </S.Container>
      {search.isLoading && <Spinner />}
    </>
  );
}

const S = {
  Container: styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  `,
  Empty: styled.td`
    text-align: center;
    padding: 10px;
  `,
};
