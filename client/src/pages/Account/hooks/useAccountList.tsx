import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import instance from '../../../api/instance';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { User } from '../../../types/user';

export default function useAccountList() {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.reducers.accounts);
  const { page, setPage, hasMore, setHasMore, ref, inView } = useInfiniteScroll();
  const [users, setUsers] = useState<User[]>([]);

  const getAccounts = async () => {
    const response = await dispatch(getAccountsThunk({ _page: page, _limit: 20 }));
    setHasMore(response.payload.length === 20);
  };

  useEffect(() => {
    if (!inView || !hasMore || accounts.isLoading) return;
    getAccounts();
    setPage(page + 1);
  }, [inView, hasMore]);

  const getUsers = async () => {
    try {
      const response = await instance.get(`/users`);
      setUsers(response.data);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get user information');
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { ref, accounts, users, inView };
}
