import { AsyncThunk } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store';

export default function SearchBar({
  getDataThunk,
}: {
  getDataThunk: AsyncThunk<any, Record<string, string> | Record<string, number> | undefined, {}>;
}) {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const submitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getDataThunk({ q: search }));
  };

  return (
    <S.Form onSubmit={submitSearchForm}>
      <input
        type="text"
        value={search}
        onChange={searchInputHandler}
        placeholder="검색어를 입력해주세요."
      />
      <button type="submit">검색</button>
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

    & > button {
      background-color: ${({ theme }) => theme.palette.SUB_100};
      height: 100%;
      padding: 5px;
      border-radius: 5px;
      color: ${({ theme }) => theme.palette.BLACK};
    }
    margin: 0 auto 20px auto;
  `,
};
