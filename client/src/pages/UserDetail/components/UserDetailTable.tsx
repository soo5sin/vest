import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../../components/shared/Spinner';
import Error from '../../../components/shared/error/Error';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUserThunk } from '../../../store/reducers/user';
import { formatDate } from '../../../utils/user';

export default function UserDetailTable() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserThunk({ id: id }));
  }, []);

  if (error) return <Error error="fetching error" />;
  if (isLoading) return <Spinner />;
  if (!data) return <Error error="fetching error" />;

  return (
    <>
      <S.Img src={data.photo} alt={`${data.name}님의 사진`} />
      <S.Title>유저 상세</S.Title>
      <S.Table>
        <tbody>
          <S.Tr>
            <th>이름</th>
            <td>{data.name}</td>
            <th>이메일</th>
            <td>{data.email}</td>
            <th>나이</th>
            <td>{data.age}</td>
          </S.Tr>
          <S.Tr>
            <th>성별코드</th>
            <td>{data.gender_origin}</td>
            <th>생년월일</th>
            <td>{formatDate(data.birth_date)}</td>
            <th>핸드폰 번호</th>
            <td>{data.phone_number}</td>
          </S.Tr>
          <S.Tr>
            <th>주소</th>
            <td>{data.address + data.detail_address}</td>
            <th>가입 날짜</th>
            <td>{formatDate(data.created_at)}</td>
            <th>최근 로그인</th>
            <td>{formatDate(data.last_login)}</td>
          </S.Tr>
          <S.Tr>
            <th>마케팅 수신 동의</th>
            <td>{data.allow_marketing_push ? 'O' : 'X'}</td>
            <th>활성화 여부</th>
            <td>{data.is_active ? 'O' : 'X'}</td>
            <th>임직원 여부</th>
            <td>{data.is_staff ? 'O' : 'X'}</td>
          </S.Tr>
        </tbody>
      </S.Table>
    </>
  );
}

const S = {
  Img: styled.img`
    margin: 20px auto;
    width: 100px;
    height: 100px;
  `,

  Table: styled.table`
    margin-bottom: 70px;
    width: 900px;
  `,

  Tr: styled.tr`
    & th {
      padding: 10px 0;
      font-weight: bold;
    }
    & > td {
      text-align: center;
      border-bottom: 1px solid #999999;
    }
  `,

  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  `,
};
