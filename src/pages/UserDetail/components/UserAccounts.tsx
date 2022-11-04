import { Accounts } from '../../../types/accounts';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import { useFormatPrice } from '../../Account/hooks/useFormatPrice';
import { useGetStatus } from '../../Account/hooks/useGetStatus';

function UserAccounts({ account }: { account: Accounts }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>계좌명</th>
          <td>{account.name}</td>
          <th>브로커명</th>
          <td>{useGetBrokerName(account.broker_id)}</td>
          <th>계좌상태</th>
          <td>{useGetStatus(account.status)}</td>
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
          <th>계좌활성화여부</th>
          <td>{account.is_active ? '활성화' : '비활성화'}</td>
          <th>계좌개설일</th>
          <td>{useFormatDate(account.created_at)}</td>
          <th>최근수정날짜</th>
          <td>{useFormatDate(account.updated_at)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserAccounts;
