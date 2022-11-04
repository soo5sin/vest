import react, { useEffect } from 'react';
import Thead from '../../components/table/thead';
import { useAppDispatch, useAppSelector } from '../../store';
import { getAccountsThunk } from '../../store/reducers/accounts';
import { Accounts } from '../../types/accounts';
import Tbody from './components/Tbody';

function Account() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(getAccountsThunk());
  }, []);

  if (!data) return <div>로딩 중</div>;

  return (
    <>
      <table>
        <Thead type="account" />
        <tbody>
          {data.map((accounts: Accounts, index) => (
            <Tbody accounts={accounts} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Account;
