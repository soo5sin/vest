import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE } from '../../../constants/route';
import { useAppDispatch } from '../../../store';
import { deleteUserThunk, updateUserThunk } from '../../../store/reducers/user';
import { User } from '../../../types/user';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetAccountsById } from '../../../utils/hooks/useGetAccountsById';
import { useMaskingName } from '../hooks/useMaskingName';
import { useMaskingPhoneNumber } from '../hooks/useMaskingPhoneNumber';
import { getUsersThunk } from '../../../store/reducers/users';

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
  const [newName, setNewName] = useState(name);

  const getAccountCount = async () => {
    const accounts = await useGetAccountsById(user.id);
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
    <Tr>
      <td>
        <Xbutton onClick={deleteUserHandler}>X</Xbutton>
      </td>
      <td>
        {isEditing ? (
          <>
            <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <Button onClick={editCancelHandler}>취소</Button>
            <Button onClick={onSubmitNameHandler}>완료</Button>
          </>
        ) : (
          <>
            {<Link to={`${ROUTE.USER_DETAIL}/${id}`}>{useMaskingName(user.name)}</Link>}
            <Button onClick={() => setIsEditing(true)}>수정</Button>
          </>
        )}
      </td>
      <td>{accountCount}</td>
      <td>{email}</td>
      <td>{gender_origin}</td>
      <td>{useFormatDate(birth_date)}</td>
      <td>{useMaskingPhoneNumber(phone_number)}</td>
      <td>{useFormatDate(last_login)}</td>
      <td>{allow_marketing_push ? 'O' : 'X'}</td>
      <td>{is_staff ? 'O' : 'X'}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{useFormatDate(created_at)}</td>
    </Tr>
  );
}

const Tr = styled.tr`
  & > td {
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #444444;
  }
`;

const Xbutton = styled.button`
  color: ${({ theme }) => theme.palette.RED};
  padding: 0 10px;
`;

const Input = styled.input`
  width: 100px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.palette.MAIN_COLOR};
  border-radius: 5px;
  color: white;
  padding: 5px;
  margin-left: 5px;
`;
