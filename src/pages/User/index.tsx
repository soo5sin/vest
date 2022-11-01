import React, { useEffect } from 'react';
import Thead from '../../components/table/thead';
import Tbody from './components/Tbody';
import { useAppDispatch, useAppSelector } from '../../store';
import { getUsersThunk } from '../../store/reducers/users';
import { Users } from '../../types/user';

function User() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <table>
      <Thead type="user" />
      <tbody>
        {data.map((users: Users, index) => (
          <Tbody users={users} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default User;
