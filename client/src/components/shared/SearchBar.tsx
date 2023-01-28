import { AsyncThunk } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { useAppDispatch } from '../../store';
import useInput from '../../hooks/useInput';
import Button from './Button';
import { searchUserThunk } from '../../store/reducers/search';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [search, onChangeSearch] = useInput('');

  const submitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchUserThunk({ q: search }));
  };

  return (
    <S.Form onSubmit={submitSearchForm}>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요."
      />
      <S.ButtonWrapper>
        <Button type="submit" colorTheme="mint" size="small" borderRadius="5px">
          검색
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    & > input {
      padding: 3px;
      width: 26rem;
      margin-right: 10px;
    }
    margin: 0 auto 20px auto;
  `,
  ButtonWrapper: styled.span`
    display: inline-block;
  `,
};
