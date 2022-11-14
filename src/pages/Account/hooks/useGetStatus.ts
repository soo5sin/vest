import ACCOUNT_STATUS from '../../../assets/data/accountStatus.json';
import { AccountStatus } from '../../../types/accounts';

const accountStatus: AccountStatus = ACCOUNT_STATUS;

export const useGetStatus = (statusNumber: number) => {
  return Object.keys(accountStatus).find((key) => {
    return accountStatus[key] === statusNumber;
  });
};
