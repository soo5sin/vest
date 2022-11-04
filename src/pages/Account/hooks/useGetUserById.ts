import api from '../../../api/base';

export const useGetUserByUserId = async (userId: number | null) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};
