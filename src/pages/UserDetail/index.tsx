import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Accounts } from '../../types/accounts';
import { useGetAccountsById } from '../../utils/hooks/useGetAccountsById';
import DetailTable from './components/DetailTable';
import UserAccounts from './components/UserAccounts';

function UserDetail() {
  const { id } = useParams();
  const [accounts, setAccounts] = useState<Accounts[]>();

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await useGetAccountsById(id);
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();
  }, []);

  return (
    <Container>
      <DetailTable />
      <Title>유저의 계좌 목록</Title>
      {accounts?.map((account, index) => (
        <UserAccounts account={account} key={index} />
      ))}
    </Container>
  );
}

export default UserDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
