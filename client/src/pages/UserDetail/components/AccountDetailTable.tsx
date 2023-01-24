import styled from 'styled-components';
import { Account } from '../../../types/account';
import { formatDate } from '../../../utils/user';
import { formatPrice, getBrokerName, getStatus } from '../../../utils/account';

export default function AccountDetailTable({ account }: { account: Account }) {
  return (
    <>
      <S.Title>유저 계좌 목록</S.Title>
      <S.Table>
        <tbody>
          <S.Tr>
            <th>계좌명</th>
            <td>{account.name}</td>
            <th>브로커명</th>
            <td>{getBrokerName(account.broker_id)}</td>
            <th>계좌상태</th>
            <td>{getStatus(account.status)}</td>
          </S.Tr>
          <S.Tr>
            <th>계좌번호</th>
            <td>{account.number}</td>
            <th>평가금액</th>
            <td>{formatPrice(account.assets)}</td>
            <th>입금금액</th>
            <td>{formatPrice(account.payments)}</td>
          </S.Tr>
          <S.Tr>
            <th>계좌활성화여부</th>
            <td>{account.is_active ? '활성화' : '비활성화'}</td>
            <th>계좌개설일</th>
            <td>{formatDate(account.created_at)}</td>
            <th>최근수정날짜</th>
            <td>{formatDate(account.updated_at)}</td>
          </S.Tr>
        </tbody>
      </S.Table>
    </>
  );
}

const S = {
  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  `,

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

  Table: styled.table`
    margin-bottom: 70px;
    width: 900px;
  `,
};
