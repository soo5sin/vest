import styled from 'styled-components';
import { ACCOUNT_TITLE, USER_TITLE } from '../../../constants/table';

export interface TableType {
  type: 'account' | 'user';
}

export default function Thead({ type }: TableType) {
  return (
    <thead>
      <tr>
        {type === 'user'
          ? USER_TITLE.map((title, index) => <S.Th key={index}>{title}</S.Th>)
          : ACCOUNT_TITLE.map((title, index) => <S.Th key={index}>{title}</S.Th>)}
      </tr>
    </thead>
  );
}

const S = {
  Th: styled.th`
    padding: 10px 0;
    border-bottom: 1px solid #444444;
  `,
};
