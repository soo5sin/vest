import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getAccountsThunk } from '../../../store/reducers/accounts';

export default function useAccounts() {
  const accounts = useAppSelector((state) => state.reducers.accounts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAccountsThunk());
  }, []);

  return {
    accounts,
  };
}
