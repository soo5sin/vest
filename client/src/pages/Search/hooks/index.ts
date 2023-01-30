import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useAppSelector } from '../../../store';
import { useState, useEffect } from 'react';
import { User } from '../../../types/user';

export default function useSearch() {
  const { page, setPage, hasMore, setHasMore, ref, inView } = useInfiniteScroll();
  const search = useAppSelector((state) => state.reducers.search);
  const [result, setResult] = useState<User[]>([]);

  const getUsers = async () => {
    const length = search.data.length;
    setHasMore(length === 20);
    setResult([...result, ...search.data]);
  };

  useEffect(() => {
    if (!inView || !hasMore || search.isLoading) return;
    setPage((prev) => prev + 1);
  }, [inView, hasMore]);

  useEffect(() => {
    getUsers();
  }, [page]);

  return {
    search,
    ref,
  };
}
