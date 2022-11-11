import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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

  if (!user) return <Error>고객 정보가 없습니다.</Error>;

  return (
    <>
      <Img>
        <img src={user.photo} alt={`${user.name}님의 사진`} />
      </Img>
      <Title>유저 상세</Title>
      <Table>
        <tbody>
          <Tr>
            <th>이름</th>
            <td>{user.name}</td>
            <th>이메일</th>
            <td>{user.email}</td>
            <th>나이</th>
            <td>{user.age}</td>
          </Tr>
          <Tr>
            <th>성별코드</th>
            <td>{user.gender_origin}</td>
            <th>생년월일</th>
            <td>{useFormatDate(user.birth_date)}</td>
            <th>핸드폰 번호</th>
            <td>{user.phone_number}</td>
          </Tr>
          <Tr>
            <th>주소</th>
            <td>{user.address + user.detail_address}</td>
            <th>가입 날짜</th>
            <td>{useFormatDate(user.created_at)}</td>
            <th>최근 로그인</th>
            <td>{useFormatDate(user.last_login)}</td>
          </Tr>
          <Tr>
            <th>마케팅 수신 동의</th>
            <td>{user.allow_marketing_push ? 'O' : 'X'}</td>
            <th>활성화 여부</th>
            <td>{user.is_active ? 'O' : 'X'}</td>
            <th>임직원 여부</th>
            <td>{user.is_staff ? 'O' : 'X'}</td>
          </Tr>
        </tbody>
      </Table>
    </>
  );
}

export default DetailTable;

const Error = styled.div`
  text-align: center;
  min-height: 100vh;
  margin-top: 10rem;
`;

const Img = styled.div`
  margin: 20px auto;
`;

const Table = styled.table`
  margin-bottom: 20px;
`;

const Tr = styled.tr`
  & th {
    padding: 10px 0;
    font-weight: bold;
  }
  & > td {
    text-align: center;
    border-bottom: 1px solid #999999;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
