import BROKERS_JSON from '.././assets/data/brokers.json';
import { Brokers } from '../types/account';
import ACCOUNT_STATUS from '../assets/data/accountStatus.json';
import { AccountStatus } from '../types/account';

const accountStatus: AccountStatus = ACCOUNT_STATUS;

export const getStatus = (statusNumber: number) => {
  return Object.keys(accountStatus).find((key) => {
    return accountStatus[key] === statusNumber;
  });
};

const brokers: Brokers = BROKERS_JSON;

export const getBrokerName = (brokerId: number) => {
  return brokers[brokerId];
};

export const formatPrice = (price: string) => {
  const formattedPrice = Math.floor(Number(price)).toLocaleString();
  return formattedPrice;
};

export const maskingAccountNumber = (number: string) => {
  const first = number.slice(0, 1);
  const middle = number.slice(1, -1);
  const last = number.slice(-1);
  let masking = '';

  for (let i = 0; i < middle.length; i++) {
    masking += '*';
  }

  const marskedNumber = first + masking + last;
  return marskedNumber;
};
