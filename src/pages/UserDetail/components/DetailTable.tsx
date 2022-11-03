import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Users } from '../../../types/user';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetUserById } from '../hooks/useGetUserById';

function DetailTable() {
  const { id } = useParams();
  const [user, setUser] = useState<Users | undefined>();

  useEffect(() => {
    const getUser = async () => {
      const user = await useGetUserById(id);
      setUser(user);
    };
    getUser();
  }, []);

  if (!user) return <div>로딩중</div>;

  return (
    <>
      <img src={user.photo} alt={`${user.name}님의 사진`} />
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>{user.name}</td>
            <th>이메일</th>
            <td>{user.email}</td>
            <th>나이</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>성별코드</th>
            <td>{user.gender_origin}</td>
            <th>생년월일</th>
            <td>{useFormatDate(user.birth_date)}</td>
            <th>핸드폰 번호</th>
            <td>{user.phone_number}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>{user.address + user.detail_address}</td>
            <th>가입 날짜</th>
            <td>{useFormatDate(user.created_at)}</td>
            <th>최근 로그인</th>
            <td>{useFormatDate(user.last_login)}</td>
          </tr>
          <tr>
            <th>마케팅 수신 동의</th>
            <td>{user.allow_marketing_push ? 'O' : 'X'}</td>
            <th>활성화 여부</th>
            <td>{user.is_active ? 'O' : 'X'}</td>
            <th>임직원 여부</th>
            <td>{user.is_staff ? 'O' : 'X'}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DetailTable;
