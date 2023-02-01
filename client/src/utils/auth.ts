import { UserToken } from './userToken';
import { UserEmail } from './userEmail';
import instance from '../api/instance';

export function authValidator(name: string, value: string) {
  if (name === 'email') {
    return value.includes('@') && value.includes('.') ? true : false;
  }
  if (name === 'password') {
    return value.length >= 4 ? true : false;
  }
}

export function clearAuth() {
  UserToken.remove();
  UserEmail.remove();
  instance.defaults.headers['Authorization'] = '';
}
