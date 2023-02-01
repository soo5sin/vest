import { storage } from './user';

const USER_EMAIL = 'USER_EMAIL';

export const UserEmail = {
  set(value: string) {
    storage.setItem(USER_EMAIL, value);
  },
  get() {
    return storage.getItem(USER_EMAIL);
  },
  remove() {
    storage.removeItem(USER_EMAIL);
  },
};
