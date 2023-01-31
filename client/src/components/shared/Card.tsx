import { ReactElement } from 'react';
import styled from 'styled-components';
import Button from './Button';

interface CardProps {
  children?: ReactElement | string;
  onClickHanlder?: () => Promise<void>;
}

export default function Card({ children, onClickHanlder }: CardProps) {
  return (
    <S.Container>
      <S.ButtonWrapper>
        <Button size="small" colorTheme="white" onClick={onClickHanlder}>
          X
        </Button>
      </S.ButtonWrapper>
      {children}
    </S.Container>
  );
}

const S = {
  ButtonWrapper: styled.div`
    width: 30px;
    margin: 0 0 0 auto;
  `,
  Container: styled.section`
    font-size: 10px;
    width: 240px;
    box-shadow: 0 3px 5px 0 ${({ theme }) => theme.palette.GRAY_100};
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.WHITE};
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.palette.GRAY_100};
    margin: 30px 25px 20px 25px;
    &:hover {
      box-shadow: 0 3px 15px 0 #d3d3d3;
      transition: all 0.5s;
    }
  `,
};
