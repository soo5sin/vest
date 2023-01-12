import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../../components/shared/Spinner';

const DetailTable = lazy(() => import('./components/DetailTable'));

export default function AccountDetail() {
  return (
    <>
      <S.Title>계좌 상세</S.Title>
      <Suspense fallback={<Spinner />}>
        <DetailTable />
      </Suspense>
    </>
  );
}

const S = {
  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  `,
};
