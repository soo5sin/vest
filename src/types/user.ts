export interface Users {
  id: number | null;
  uuid: string | null;
  photo: string;
  name: string;
  email: string;
  age: number | null;
  gender_origin: number | null;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  allow_marketing_push: boolean | string;
  allow_invest_push: boolean | string;
  is_active: boolean | string;
  is_staff: boolean | string;
}
