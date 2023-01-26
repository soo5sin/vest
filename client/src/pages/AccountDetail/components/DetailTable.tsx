import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import styled from 'styled-components';
import Spinner from '../../../components/shared/Spinner';
import ErrorPage from '../../../components/shared/error/Error';
import { getAccountThunk } from '../../../store/reducers/account';
import { findUserNameById, formatDate } from '../../../utils/user';
import { formatPrice, getBrokerName, getStatus } from '../../../utils/account';

export default function DetailTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.reducers.users);
  const account = useAppSelector((state) => state.reducers.account);
  const { broker_id, status, user_id, number, name, assets, payments, is_active, created_at } =
    account.data;
  const { uuid } = useParams();

  const getUsersAccount = async () => {
    await Promise.all([dispatch(getUsersThunk()), dispatch(getAccountThunk({ uuid: uuid }))]);
  };

  useEffect(() => {
    getUsersAccount();
  }, []);

  if (account.error || users.error) return <ErrorPage error="fetching error" />;
  if (account.isLoading || users.isLoading) return <Spinner />;

  return (
    <table>
      <tbody>
        <S.Tr>
          <th>고객명</th>
          <td>{findUserNameById(users.data, user_id)}</td>
          <th>계좌명</th>
          <td>{name}</td>
          <th>브로커명</th>
          <td>{getBrokerName(broker_id)}</td>
        </S.Tr>
        <S.Tr>
          <th>계좌번호</th>
          <td>{number}</td>
          <th>평가금액</th>
          <td>{formatPrice(assets)}</td>
          <th>입금금액</th>
          <td>{formatPrice(payments)}</td>
        </S.Tr>
        <S.Tr>
          <th>계좌상태</th>
          <td>{getStatus(status)}</td>
          <th>계좌활성화여부</th>
          <td>{is_active ? '활성화' : '비활성화'}</td>
          <th>계좌개설일</th>
          <td>{formatDate(created_at)}</td>
        </S.Tr>
      </tbody>
    </table>
  );
}

const S = {
  Tr: styled.tr`
    & th {
      padding: 10px 0;
      font-weight: bold;
    }
    & > td {
      text-align: center;
      width: 13rem;
      border-bottom: 1px solid #999999;
    }
  `,
};
