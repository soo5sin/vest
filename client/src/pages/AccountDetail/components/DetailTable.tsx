import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormatPrice } from '../../Account/hooks/useFormatPrice';
import { useGetStatus } from '../../Account/hooks/useGetStatus';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import styled from 'styled-components';
import Spinner from '../../../components/shared/spinner/Spinner';
import ErrorPage from '../../../components/shared/error/Error';
import { useFindUserNameById } from '../../../utils/hooks/useFindUserNameById';
import { getAccountThunk } from '../../../store/reducers/account';

export default function DetailTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const account = useAppSelector((state) => state.account);
  const { broker_id, status, user_id, number, name, assets, payments, is_active, created_at } =
    account.data;
  const { uuid } = useParams();

  useEffect(() => {
    dispatch(getUsersThunk());
    dispatch(getAccountThunk({ uuid: uuid }));
  }, []);

  if (account.error || users.error) return <ErrorPage error="fetching error" />;
  if (account.isLoading || users.isLoading) return <Spinner />;

  return (
    <table>
      <tbody>
        <Tr>
          <th>고객명</th>
          <td>{useFindUserNameById(users.data, user_id)}</td>
          <th>계좌명</th>
          <td>{name}</td>
          <th>브로커명</th>
          <td>{useGetBrokerName(broker_id)}</td>
        </Tr>
        <Tr>
          <th>계좌번호</th>
          <td>{number}</td>
          <th>평가금액</th>
          <td>{useFormatPrice(assets)}</td>
          <th>입금금액</th>
          <td>{useFormatPrice(payments)}</td>
        </Tr>
        <Tr>
          <th>계좌상태</th>
          <td>{useGetStatus(status)}</td>
          <th>계좌활성화여부</th>
          <td>{is_active ? '활성화' : '비활성화'}</td>
          <th>계좌개설일</th>
          <td>{useFormatDate(created_at)}</td>
        </Tr>
      </tbody>
    </table>
  );
}

const Tr = styled.tr`
  & th {
    padding: 10px 0;
    font-weight: bold;
  }
  & > td {
    text-align: center;
    width: 13rem;
    border-bottom: 1px solid #999999;
  }
`;
