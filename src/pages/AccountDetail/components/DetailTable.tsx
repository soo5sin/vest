import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Account } from '../../../types/account';
import { useGetAccountByUuid } from '../hooks/useGetAccountById';
import { useFormatPrice } from '../../Account/hooks/useFormatPrice';
import { useGetStatus } from '../../Account/hooks/useGetStatus';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import styled from 'styled-components';
import Spinner from '../../../components/shared/spinner/Spinner';
import ErrorPage from '../../../components/shared/error/Error';
import { AxiosError } from 'axios';
import { useFindUserNameById } from '../../../utils/hooks/useFindUserNameById';

export function DetailTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);
  const { uuid } = useParams();
  const [account, setAccount] = useState<Account>();
  const [isError, setIsError] = useState(false);

  const getAccount = async () => {
    try {
      const accountDetail = await useGetAccountByUuid(uuid);
      setAccount(accountDetail);
    } catch (error) {
      setIsError(true);
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to add user information');
      }
    }
  };

  useEffect(() => {
    getAccount();
    dispatch(getUsersThunk());
  }, []);

  if (isError) return <ErrorPage error="fetching error" />;
  if (!account) return <Spinner />;

  return (
    <table>
      <tbody>
        <Tr>
          <th>고객명</th>
          <td>{useFindUserNameById(users, account?.user_id)}</td>
          <th>계좌명</th>
          <td>{account.name}</td>
          <th>브로커명</th>
          <td>{useGetBrokerName(account.broker_id)}</td>
        </Tr>
        <Tr>
          <th>계좌번호</th>
          <td>{account.number}</td>
          <th>평가금액</th>
          <td>{useFormatPrice(account.assets)}</td>
          <th>입금금액</th>
          <td>{useFormatPrice(account.payments)}</td>
        </Tr>
        <Tr>
          <th>계좌상태</th>
          <td>{useGetStatus(account.status)}</td>
          <th>계좌활성화여부</th>
          <td>{account.is_active ? '활성화' : '비활성화'}</td>
          <th>계좌개설일</th>
          <td>{useFormatDate(account.created_at)}</td>
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
