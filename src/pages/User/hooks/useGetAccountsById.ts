import baseApi from '../../../api/base';

export const useGetAccountsById = async (id: number) => {
  const response = await baseApi.get(`/accounts/?user_id=${id}`);
  console.log(response);
  return response;
};
