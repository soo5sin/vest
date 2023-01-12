import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Account } from '../../../types/account';
import { User } from '../../../types/user';
import { useFindUserNameById } from '../../../utils/hooks/useFindUserNameById';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import { useFormatPrice } from '../hooks/useFormatPrice';
import { useGetStatus } from '../hooks/useGetStatus';
import { useMaskingNumber } from '../hooks/useMaskingNumber';

export default function TbodyRow({ account, users }: { account: Account; users: User[] }) {
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
  } = account;

  return (
    <S.Tr>
      <td>
        <Link to={`/user-detail/${id}`}>{useFindUserNameById(users, user_id)}</Link>
      </td>
      <td>{useGetBrokerName(broker_id)}</td>
      <td>
        <Link to={`/account-detail/${uuid}`}>{useMaskingNumber(number)}</Link>
      </td>
      <td>{useGetStatus(status)}</td>
      <td>{name}</td>
      <td
        style={
          assets > payments
            ? { color: 'red' }
            : assets === payments
            ? { color: 'black' }
            : { color: 'blue' }
        }
      >
        {useFormatPrice(assets)}
      </td>
      <td>{useFormatPrice(payments)}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{useFormatDate(created_at)}</td>
    </S.Tr>
  );
}

const S = {
  Tr: styled.tr`
    & > td {
      padding: 15px 0;
      text-align: center;
      border-bottom: 1px solid #444444;
    }
  `,
};
