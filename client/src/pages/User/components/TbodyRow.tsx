import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE } from '../../../constants/route';
import { useAppDispatch } from '../../../store';
import { deleteUserThunk, updateUserThunk } from '../../../store/reducers/user';
import { User } from '../../../types/user';
import { getUsersThunk } from '../../../store/reducers/users';
import useInput from '../../../hooks/useInput';
import Button from '../../../components/shared/Button';
import { formatDate, maskingPhoneNumber, maskingUserName } from '../../../utils/user';
import { getAccountsById } from '../../../utils/getAccountsById';

export default function TbodyRow({ user }: { user: User }) {
  const {
    name,
    id,
    email,
    gender_origin,
    birth_date,
    phone_number,
    last_login,
    allow_marketing_push,
    is_staff,
    is_active,
    created_at,
  } = user;
  const dispatch = useAppDispatch();
  const [accountCount, setAccountCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, onChangeNewName, setNewName] = useInput(name);

  const getAccountCount = async () => {
    const accounts = await getAccountsById(user.id);
    setAccountCount(accounts.length);
  };

  const onSubmitNameHandler = async () => {
    await dispatch(updateUserThunk({ id, newName }));
    setIsEditing(false);
    dispatch(getUsersThunk());
  };

  const deleteUserHandler = async () => {
    if (!confirm('정말로 해당 고객을 삭제하시겠습니까?')) return;
    await dispatch(deleteUserThunk(id));
    dispatch(getUsersThunk());
  };

  const editCancelHandler = () => {
    setIsEditing(false);
    setNewName(user.name);
  };

  useEffect(() => {
    getAccountCount();
  }, [user]);

  if (!user.name) return null;

  return (
    <S.Tr>
      <td>
        <S.Xbutton onClick={deleteUserHandler}>X</S.Xbutton>
      </td>
      <td>
        {isEditing ? (
          <>
            <S.Input value={newName} onChange={onChangeNewName} />
            <S.EditButton>
              <Button onClick={editCancelHandler} size="small" borderRadius="5px">
                취소
              </Button>
              <Button onClick={onSubmitNameHandler} size="small" borderRadius="5px">
                완료
              </Button>
            </S.EditButton>
          </>
        ) : (
          <>
            {<Link to={`${ROUTE.USER_DETAIL}/${id}`}>{maskingUserName(user.name)}</Link>}
            <S.ButtonWrapper>
              <Button
                onClick={() => setIsEditing(true)}
                colorTheme="default"
                size="small"
                borderRadius="5px"
              >
                수정
              </Button>
            </S.ButtonWrapper>
          </>
        )}
      </td>
      <td>{accountCount}</td>
      <td>{email}</td>
      <td>{gender_origin}</td>
      <td>{formatDate(birth_date)}</td>
      <td>{maskingPhoneNumber(phone_number)}</td>
      <td>{formatDate(last_login)}</td>
      <td>{allow_marketing_push ? 'O' : 'X'}</td>
      <td>{is_staff ? 'O' : 'X'}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{formatDate(created_at)}</td>
    </S.Tr>
  );
}

const S = {
  Tr: styled.tr`
    & > td {
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid #444444;
    }
  `,

  Xbutton: styled.button`
    color: ${({ theme }) => theme.palette.RED};
    padding: 0 10px;
  `,

  Input: styled.input`
    width: 100px;
  `,

  ButtonWrapper: styled.div`
    width: 5rem;
    margin: 0 auto;
  `,

  EditButton: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    & button {
      width: 3rem;
    }
  `,
};
