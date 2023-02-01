import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useAppSelector } from '../../../store';
import { useState, useEffect } from 'react';
import { User } from '../../../types/user';

export default function useSearch() {
  const { setPage, hasMore, setHasMore, ref, inView } = useInfiniteScroll();
  const search = useAppSelector((state) => state.reducers.search);
  const [result, setResult] = useState<User[]>([]);

  const getUsers = async () => {
    const length = search.data.length;
    setHasMore(length === 20);
    setResult([...result, ...search.data]);
  };

  useEffect(() => {
    if (!inView || !hasMore || search.isLoading) return;
    getUsers();
    setPage((prev) => prev + 1);
  }, [inView, hasMore]);

  return {
    search,
    ref,
  };
}
