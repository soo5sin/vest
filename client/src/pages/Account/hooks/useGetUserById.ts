import api from '../../../api/instance';

export const useGetUserByUserId = async (userId: number, params?: object) => {
  const response = await api.get(`/users/${userId}`, { params });
  return response.data;
};
