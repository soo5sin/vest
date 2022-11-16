import BROKERS_JSON from '../../assets/data/brokers.json';
import { Brokers } from '../../types/account';

const brokers: Brokers = BROKERS_JSON;

export const useGetBrokerName = (brokerId: number) => {
  return brokers[brokerId];
};
