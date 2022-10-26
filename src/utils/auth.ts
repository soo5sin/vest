const storage = localStorage;
const USER_TOKEN_KEY = 'ACCESS_TOKEN';

export const UserToken = {
  set(value: string) {
    storage.setItem(USER_TOKEN_KEY, value);
  },
  get() {
    return storage.getItem(USER_TOKEN_KEY);
  },
  remove() {
    storage.removeItem(USER_TOKEN_KEY);
  },
};
