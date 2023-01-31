import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../../components/shared/Card';
import { ROUTE } from '../../../constants/route';
import { Account } from '../../../types/account';
import { User } from '../../../types/user';
import { formatDate, maskingPhoneNumber, maskingUserName } from '../../../utils/user';
import useDeleteUser from '../hooks/useDeleteUser';

export default function UserCard({ user, userAccounts }: { user: User; userAccounts: Account[] }) {
  const { deleteUserHandler } = useDeleteUser(user.id);

  if (!user.name) return null;

  return (
    <Card onClickHanlder={deleteUserHandler}>
      <Link to={`${ROUTE.USER_DETAIL}/${user.id}`}>
        <div>
          <S.Img src={user.photo} alt={`${user.name}님의 사진`} />
        </div>
        <S.Name>{maskingUserName(user.name)}</S.Name>
        <div>
          <S.List>보유중</S.List>
          {userAccounts.length}
        </div>
        <div>
          <S.List>이메일</S.List>
          {user.email}
        </div>
        <div>
          <S.List>성별코드</S.List>
          {user.gender_origin}
        </div>
        <div>
          <S.List>생년월일</S.List>
          {formatDate(user.birth_date)}
        </div>
        <div>
          <S.List>휴대폰번호</S.List>
          {maskingPhoneNumber(user.phone_number)}
        </div>
        <div>
          <S.List>최근 로그인</S.List>
          {formatDate(user.last_login)}
        </div>
        <div>
          <S.List>수신 동의 여부</S.List>
          {user.allow_marketing_push ? 'O' : 'X'}
        </div>
        <div>
          <S.List>임직원</S.List>
          {user.is_staff ? 'O' : 'X'}
        </div>
        <div>
          <S.List>활성화 여부</S.List>
          {user.is_active ? '활성화' : '비활성화'}
        </div>
        <div>
          <S.List>가입일</S.List>
          {formatDate(user.created_at)}
        </div>
      </Link>
    </Card>
  );
}

const S = {
  List: styled.span`
    display: inline-block;
    width: 110px;
    padding: 3px;
    text-align: center;
  `,
  Name: styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.palette.GRAY_700};
    margin-bottom: 10px;
  `,
  Img: styled.img`
    margin: 0 auto 15px auto;
    border-radius: 5rem;
    object-fit: contain;
    width: 80px;
  `,
};
