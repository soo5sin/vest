import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../store';
import { getUsersThunk, updateUserThunk } from '../../../store/reducers/users';

import { Users } from '../../../types/user';
import { useGetAccountsById } from '../hooks/useGetAccountsById';

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
      <td>X</td>
      <td>
        {isEditing ? (
          <>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => setIsEditing(false)}>취소</button>
            <button onClick={onSubmitNameHandler}>완료</button>
          </>
        ) : (
          <>
            {users.name}
            <button onClick={() => setIsEditing(true)}>수정</button>
          </>
        )}
      </td>
      <td>{accountCount}</td>
      <td>{email}</td>
      <td>{gender_origin}</td>
      <td>{birth_date}</td>
      <td>{phone_number}</td>
      <td>{last_login}</td>
      <td>{allow_marketing_push ? 'O' : 'X'}</td>
      <td>{is_staff ? 'O' : 'X'}</td>
      <td>{is_active ? '활성화' : '비활성화'}</td>
      <td>{created_at}</td>
    </tr>
  );
}

export default Tbody;
