import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountThunk } from '../../../store/reducers/account';
import { getUsersThunk } from '../../../store/reducers/users';

export default function useGetDetailAccount() {
  const users = useAppSelector((state) => state.reducers.users);
  const dispatch = useAppDispatch();
  const account = useAppSelector((state) => state.reducers.account);
  const { uuid } = useParams();

  const getUsersAccount = async () => {
    await Promise.all([dispatch(getUsersThunk()), dispatch(getAccountThunk({ uuid: uuid }))]);
  };

  useEffect(() => {
    getUsersAccount();
  }, []);

  return {
    users,
    account,
  };
}
