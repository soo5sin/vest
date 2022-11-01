import React, { useEffect, useState } from 'react';

import { Users } from '../../../types/user';
import { useGetAccountsById } from '../hooks/useGetAccountsById';

function Tbody({ users }: { users: Users }) {
  const [accountCount, setAccountCount] = useState(0);

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
      <td>{users.name}</td>
      <td>{accountCount}</td>
      <td>{users.email}</td>
      <td>{users.gender_origin}</td>
      <td>{users.birth_date}</td>
      <td>{users.phone_number}</td>
      <td>{users.last_login}</td>
      <td>{users.allow_marketing_push ? 'O' : 'X'}</td>
      <td>{users.is_staff ? 'O' : 'X'}</td>
      <td>{users.is_active ? '활성화' : '비활성화'}</td>
      <td>{users.created_at}</td>
    </tr>
  );
}

export default Tbody;
