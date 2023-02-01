import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Thead from '../../../components/shared/table/Thead';
import { Account } from '../../../types/account';
import TbodyRow from './TbodyRow';
import useAccountList from '../hooks/useAccountList';
import Spinner from '../../../components/shared/Spinner';

export default function AccountListBox() {
  const { ref, accounts, users } = useAccountList();

  if (accounts.error) return <Error error="data fetching error" />;

  return (
    <>
      <S.Table>
        <Thead type="account" />
        <tbody>
          {accounts.data.length > 0 &&
            accounts.data.map((account: Account, index) => (
              <TbodyRow account={account} key={index} users={users} />
            ))}
        </tbody>
      </S.Table>
      <div ref={ref} />
      {accounts.isLoading && <Spinner />}
    </>
  );
}

const S = {
  Table: styled.table`
    background-color: ${({ theme }) => theme.palette.WHITE};
    padding: 10px;
    border-radius: 15px;
    margin-top: 20px;
  `,
  Empty: styled.td`
    text-align: center;
    padding: 10px;
  `,
};
