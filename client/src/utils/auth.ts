import { UserToken } from './userToken';
import { UserEmail } from './userEmail';
import instance from '../api/instance';

export function authValidator(name: string, value: string) {
  if (name === 'email') {
    const result = value.includes('@') && value.includes('.');
    return result ? true : false;
  }
  if (name === 'password') {
    const result = value.length >= 4;
    return result ? true : false;
  }
}

export function clearAuth() {
  UserToken.remove();
  UserEmail.remove();
  instance.defaults.headers['Authorization'] = '';
}
