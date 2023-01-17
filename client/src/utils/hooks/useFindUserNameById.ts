import { User } from '../../types/user';

export const useFindUserNameById = (users: User[], id: number) => {
  const userName = users.find((user) => user.id === id)?.name;
  return userName ? userName : false;
};
