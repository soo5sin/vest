export interface Account {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: number;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Brokers {
  [key: number]: string;
}

export interface AccountStatus {
  [key: string]: number;
}
