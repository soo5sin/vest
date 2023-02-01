import styled from 'styled-components';
import AccountListBox from './components/AccountListBox';

export default function Account() {
  return (
    <>
      <S.Ref>※ 고객명을 클릭하면 해당 고객의 상세 페이지로 이동합니다.</S.Ref>
      <S.Ref>※ 계좌 번호를 클릭하면 해당 계좌의 상세 페이지로 이동합니다.</S.Ref>
      <AccountListBox />
    </>
  );
}

const S = {
  Ref: styled.div`
    font-size: 13px;
    text-align: right;
    color: ${({ theme }) => theme.palette.GRAY_500};
  `,
};
