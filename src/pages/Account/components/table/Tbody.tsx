import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BROKERS from '../../../../assets/brokers.json';
import { Accounts, Brokers } from '../../../../types/accounts';
import { Users } from '../../../../types/user';
import { useFormatDate } from '../../../../utils/hooks/useFormatDate';
import { useFormatPrice } from '../../hooks/useFormatPrice';
import { useGetStatus } from '../../hooks/useGetStatus';
import { useGetUserByUserId } from '../../hooks/useGetUserById';
import { useMaskingNumber } from '../../hooks/useMaskingNumber';

function Tbody({ accounts, page }: { accounts: Accounts; page: number }) {
  const {
    uuid,
    id,
    user_id,
    broker_id,
    number,
    status,
    name,
    assets,
    payments,
    is_active,
    created_at,
  } = accounts;

  const [user, setUser] = useState<Users | undefined>();
  const brokers: Brokers = BROKERS;

  useEffect(() => {
    const getUser = async () => {
      const user = await useGetUserByUserId(user_id, { _page: page });
      setUser(user);
    };
    getUser();
  }, [accounts]);

  return (
    <tr>
      <td>
        <Link to={`/user-detail/${id}`}>{user?.name}</Link>
      </td>
      <td>{brokers[broker_id]}</td>
      <td>
        <Link to={`/account-detail/${uuid}`}>{useMaskingNumber(number)}</Link>
      </td>
      <td>{useGetStatus(status)}</td>
      <td>{name}</td>
      <td>{useFormatPrice(assets)}</td>
      <td>{useFormatPrice(payments)}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{useFormatDate(created_at)}</td>
    </tr>
  );
}

export default Tbody;
