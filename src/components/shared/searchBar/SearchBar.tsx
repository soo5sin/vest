import { AsyncThunk } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store';

function SearchBar({ getDataThunk }: { getDataThunk: AsyncThunk<any, object | undefined, {}> }) {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearchFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getDataThunk({ q: search }));
  };

  return (
    <Form onSubmit={onSubmitSearchFormHandler}>
      <input
        type="text"
        value={search}
        onChange={onChangeSearchHandler}
        placeholder="검색어를 입력해주세요."
      />
      <button type="submit">검색</button>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  & > input {
    padding: 3px;
    width: 26rem;
    margin-right: 10px;
  }
  & > button {
    background-color: ${({ theme }) => theme.palette.SUB_200};
    height: 100%;
    padding: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.palette.WHITE};
  }
  margin: 0 auto 20px auto;
`;
