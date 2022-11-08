import api from '../../api/instance';

export const useGetAccountsById = async (id: number | string | undefined | null) => {
  const response = await api.get(`/accounts?user_id=${id}`);
  return response;
};
