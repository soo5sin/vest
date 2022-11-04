import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accounts, Brokers } from '../../../types/accounts';
import { useGetAccountByUuid } from '../hooks/useGetAccountById';
import BROKERS from '../../../assets/brokers.json';
import { useFormatPrice } from '../../Account/hooks/useFormatPrice';
import { useGetStatus } from '../../Account/hooks/useGetStatus';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';

export function DetailTable() {
  const { uuid } = useParams();
  const [account, setAccount] = useState<Accounts>();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.users);
  const brokers: Brokers = BROKERS;

  const getAccount = async () => {
    const accountDetail = await useGetAccountByUuid(uuid);
    setAccount(accountDetail);
  };

  const getUserName = () => {
    return data.find((user) => user.id === account?.user_id)?.name;
  };

  useEffect(() => {
    getAccount();
    dispatch(getUsersThunk());
  }, []);

  if (!account || !data) return <div>로딩중</div>;

  return (
    <table>
      <tbody>
        <tr>
          <th>고객명</th>
          <td>{getUserName()}</td>
          <th>계좌명</th>
          <td>{account.name}</td>
          <th>브로커명</th>
          <td>{brokers[account.broker_id]}</td>
        </tr>
        <tr>
          <th>계좌번호</th>
          <td>{account.number}</td>
          <th>평가금액</th>
          <td>{useFormatPrice(account.assets)}</td>
          <th>입금금액</th>
          <td>{useFormatPrice(account.payments)}</td>
        </tr>
        <tr>
          <th>계좌상태</th>
          <td>{useGetStatus(account.status)}</td>
          <th>계좌활성화여부</th>
          <td>{account.is_active ? '활성화' : '비활성화'}</td>
          <th>계좌개설일</th>
          <td>{useFormatDate(account.created_at)}</td>
        </tr>
      </tbody>
    </table>
  );
}
