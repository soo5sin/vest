export interface User {
  id: number | null;
  uuid: string;
  password: string;
  photo: string;
  name: string;
  email: string;
  age: number | null;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
}
