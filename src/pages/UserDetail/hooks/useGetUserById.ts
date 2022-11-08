import api from '../../../api/instance';

export const useGetUserById = async (id: string | undefined) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
