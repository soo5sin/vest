import styled from 'styled-components';
import React from 'react';

interface PageButton {
  active?: boolean;
}

export default function Pagenation({
  setCurrentPage,
  limit,
  totalCount,
  currentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  totalCount: number;
  currentPage: number;
}) {
  const totalPage = Math.ceil(totalCount / limit);
  const totalPageLengthArray = Array(totalPage).fill(0);

  const changeCurrentPage = (buttonNumber: number) => () => {
    setCurrentPage(buttonNumber);
  };

  return (
    <Container>
      {totalPageLengthArray.map((_, index) => {
        const buttonNumber = index + 1;
        const isClicked = currentPage === buttonNumber;
        return (
          <Page onClick={changeCurrentPage(buttonNumber)} active={isClicked} key={index}>
            {buttonNumber}
          </Page>
        );
      })}
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
