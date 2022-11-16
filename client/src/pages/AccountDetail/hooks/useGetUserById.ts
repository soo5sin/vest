import api from '../../../api/instance';

export const useGetUserByUserId = async (userId: number | undefined) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};
