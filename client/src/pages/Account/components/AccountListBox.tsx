import styled from 'styled-components';
import Error from '../../../components/shared/error/Error';
import Thead from '../../../components/shared/table/Thead';
import { Account } from '../../../types/account';
import TbodyRow from './TbodyRow';
import useAccountList from '../hooks/useAccountList';

export default function AccountListBox() {
  const { ref, accounts, users } = useAccountList();

  if (accounts.error || users.error) return <Error error="data fetching error" />;

  return (
    <>
      <S.Table>
        <Thead type="account" />
        <tbody>
          {accounts.data.length ? (
            accounts.data.map((account: Account, index) => (
              <TbodyRow account={account} key={index} users={users.data} />
            ))
          ) : (
            <tr>
              <S.Empty colSpan={9}>검색 결과가 없습니다.</S.Empty>
            </tr>
          )}
        </tbody>
      </S.Table>
      <div ref={ref} />
      {accounts.isLoading && <S.Loading>Loading...</S.Loading>}
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
  Loading: styled.div`
    text-align: center;
    margin: 30px 0 30px 0;
    font-weight: bold;
  `,
};
