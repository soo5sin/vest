import api from '../../../api/base';

export const useGetAccountByUuid = async (uuid: string | undefined) => {
  const response = await api.get(`/accounts?uuid=${uuid}`);
  return response.data[0];
};
