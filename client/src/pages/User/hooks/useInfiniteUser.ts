import { useEffect } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUsersThunk } from '../../../store/reducers/users';

export default function useInfiniteUser() {
  const { page, setPage, hasMore, setHasMore, ref, inView } = useInfiniteScroll();
  const users = useAppSelector((state) => state.reducers.users);
  const dispatch = useAppDispatch();

  const getUsers = async () => {
    const response = await dispatch(getUsersThunk({ _page: page, _limit: 10 }));
    const length = response.payload.length;
    setHasMore(length === 10);
  };

  useEffect(() => {
    if (!inView || !hasMore || users.isLoading) return;
    setPage(page + 1);
    getUsers();
  }, [inView, hasMore]);

  return {
    ref,
    users,
  };
}
