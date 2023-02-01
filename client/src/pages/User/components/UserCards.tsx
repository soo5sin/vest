import styled from 'styled-components';
import useAccounts from '../hooks/useAccounts';
import useGetUser from '../hooks/useInfiniteUser';
import UserCard from './UserCard';

export default function UserCards() {
  const { ref, users } = useGetUser();
  const { accounts } = useAccounts();

  return (
    <S.Container>
      {users.data.map((user, index) => {
        const userAccounts = accounts.filter((account) => user.id === account.user_id);
        return <UserCard key={index} user={user} userAccounts={userAccounts} />;
      })}
      <div ref={ref} />
      {users.isLoading && <S.Loading>Loading...</S.Loading>}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  `,
  Loading: styled.div`
    text-align: center;
    margin: 30px 0 30px 0;
    font-weight: bold;
  `,
};
