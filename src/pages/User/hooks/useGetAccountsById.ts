import baseApi from '../../../api/base';

export const useGetAccountsById = async (id: number | null) => {
  const response = await baseApi.get(`/accounts/?user_id=${id}`);
  return response;
};
