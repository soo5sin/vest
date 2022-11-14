import BrokersJson from '../../assets/data/brokers.json';
import { Brokers } from '../../types/account';

const brokers: Brokers = BrokersJson;

export const useGetBrokerName = (brokerId: number) => {
  return brokers[brokerId];
};
