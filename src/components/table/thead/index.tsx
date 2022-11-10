import styled from 'styled-components';
import { ACCOUNT_TITLE, USER_TITLE } from '../../../constants/table';

export interface TableType {
  type: 'account' | 'user';
}

const Thead = ({ type }: TableType) => {
  return (
    <thead>
      <tr>
        {type === 'user'
          ? USER_TITLE.map((title, index) => <Th key={index}>{title}</Th>)
          : ACCOUNT_TITLE.map((title, index) => <Th key={index}>{title}</Th>)}
      </tr>
    </thead>
  );
};
export default Thead;

const Th = styled.th`
  padding: 10px 0;
  border-bottom: 1px solid #444444;
`;
