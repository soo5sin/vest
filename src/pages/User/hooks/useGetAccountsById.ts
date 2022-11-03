import api from '../../../api/base';

export const useGetAccountsById = async (id: number | null) => {
  const response = await api.get(`/accounts/?user_id=${id}`);
  return response;
};
