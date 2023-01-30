import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  return {
    page,
    setPage,
    hasMore,
    setHasMore,
    ref,
    inView,
  };
}
