import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes';
import { useAppDispatch } from '../../../store';
import { deleteUserThunk, getUsersThunk, updateUserThunk } from '../../../store/reducers/users';

import { Users } from '../../../types/user';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetAccountsById } from '../hooks/useGetAccountsById';
import { useMaskingName } from '../hooks/useMaskingName';
import { useMaskingPhoneNumber } from '../hooks/useMaskingPhoneNumber';

function Tbody({ users }: { users: Users }) {
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
  } = users;

  const dispatch = useAppDispatch();
  const [accountCount, setAccountCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const onSubmitNameHandler = () => {
    dispatch(updateUserThunk({ id, newName }));
    setIsEditing(false);
    dispatch(getUsersThunk());
  };

  const deleteUserHandler = () => {
    dispatch(deleteUserThunk(id));
    dispatch(getUsersThunk());
  };

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await useGetAccountsById(users.id);
        setAccountCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();
  }, [users.id]);

  if (!users.name) return null;

  return (
    <tr>
      <td>
        <button onClick={deleteUserHandler}>X</button>
      </td>
      <td>
        {isEditing ? (
          <>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => setIsEditing(false)}>취소</button>
            <button onClick={onSubmitNameHandler}>완료</button>
          </>
        ) : (
          <>
            {<Link to={`${ROUTE.USER_DETAIL}/${id}`}>{useMaskingName(users.name)}</Link>}
            <button onClick={() => setIsEditing(true)}>수정</button>
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
    </tr>
  );
}

export default Tbody;
