import styled from 'styled-components';
import React from 'react';

interface PageButton {
  active?: boolean;
}

export default function Pagenation({
  setPage,
  limit,
  totalCount,
  page,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  totalCount: number;
  page: number;
}) {
  const totalPage = Math.ceil(totalCount / limit);

  const handlePageChange = (i: number) => {
    setPage(i + 1);
  };

  return (
    <Container>
      {Array(totalPage)
        .fill(0)
        .map((_, i) => (
          <Page onClick={() => handlePageChange(i)} active={page === i + 1} key={i}>
            {i + 1}
          </Page>
        ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem auto;
`;

const Page = styled.button<PageButton>`
  padding: 0.5rem 0.75rem;
  margin-right: 5px;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.palette.GRAY_200};
  ${({ active }) =>
    active &&
    `
        background: #091E3B;
        color: #fff;
  `}
`;
