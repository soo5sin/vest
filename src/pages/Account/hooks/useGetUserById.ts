import api from '../../../api/base';

export const useGetUserByUserId = async (userId: number | undefined, params?: object) => {
  const response = await api.get(`/users/${userId}`, { params });
  return response.data;
};
