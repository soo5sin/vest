import BrokersJson from '../../assets/brokers.json';
import { Brokers } from '../../types/accounts';

const brokers: Brokers = BrokersJson;

export const useGetBrokerName = (brokerId: number) => {
  return brokers[brokerId];
};
