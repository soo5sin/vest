import baseApi from '../../../api/base';
import { Users } from '../../../types/user';

export const useGetUserById = async (id: string | undefined) => {
  const response = await baseApi.get(`/users/${id}`);
  return response.data;
};
