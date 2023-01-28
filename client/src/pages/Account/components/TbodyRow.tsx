import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Account } from '../../../types/account';
import { User } from '../../../types/user';
import { findUserNameById, formatDate } from '../../../utils/user';
import {
  formatPrice,
  getBrokerName,
  getStatus,
  maskingAccountNumber,
} from '../../../utils/account';

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

  const userName = findUserNameById(users, user_id);
  if (!userName) return null;

  return (
    <S.Tr>
      <td>
        <Link to={`/user-detail/${user_id}`}>{userName}</Link>
      </td>
      <td>{getBrokerName(broker_id)}</td>
      <td>
        <Link to={`/account-detail/${uuid}`}>{maskingAccountNumber(number)}</Link>
      </td>
      <td>{getStatus(status)}</td>
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
        {formatPrice(assets)}
      </td>
      <td>{formatPrice(payments)}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{formatDate(created_at)}</td>
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
