import { useEffect } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';
import { getUsersThunk } from '../../../store/reducers/users';

export default function useAccountList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.reducers.users);
  const accounts = useAppSelector((state) => state.reducers.accounts);
  const { page, setPage, hasMore, setHasMore, ref, inView } = useInfiniteScroll();

  const getAccounts = async () => {
    const response = await dispatch(getAccountsThunk({ _page: page, _limit: 20 }));
    setHasMore(response.payload.length === 20);
  };

  useEffect(() => {
    if (!inView || !hasMore || accounts.isLoading) return;
    getAccounts();
    setPage(page + 1);
  }, [inView, hasMore]);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return { ref, accounts, users, inView };
}
