import api from '../../../api/base';

export const useGetUserByUserIdd = async (userId: number | undefined) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};
