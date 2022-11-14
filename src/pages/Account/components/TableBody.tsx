import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { Account } from '../../../types/account';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import { useFormatPrice } from '../hooks/useFormatPrice';
import { useGetStatus } from '../hooks/useGetStatus';
import { useMaskingNumber } from '../hooks/useMaskingNumber';

function TableBody({ accounts }: { accounts: Account }) {
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

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);

  const getUserName = (userId: number) => {
    const userName = users.find((user) => user.id === userId)?.name;
    return userName ? userName : '-';
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <Tr>
      <td>
        <Link to={`/user-detail/${id}`}>{getUserName(user_id)}</Link>
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
    </Tr>
  );
}

export default TableBody;

const Tr = styled.tr`
  & > td {
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid #444444;
  }
`;