import { User } from '../types/user';

export const findUserNameById = (users: User[], id: number) => {
  const userName = users.find((user) => user.id === id)?.name;
  return userName ? userName : false;
};

export const maskingUserName = (name: string) => {
  if (name.length === 1) return;
  if (name.length === 2) {
    return name.replace(name.slice(-1), '*');
  } else if (name.length === 3) {
    return name.replace(name.slice(1, 2), '*');
  } else {
    const first = name.slice(0, 1);
    const middle = name.slice(1, -1);
    const last = name.slice(-1);
    let masking = '';

    for (let i = 0; i < middle.length; i++) {
      if (middle.charAt(i) === ' ') {
        masking += ' ';
      } else {
        masking += '*';
      }
    }

    return first + masking + last;
  }
};

export const maskingPhoneNumber = (phone_number: string) => {
  const numbers = phone_number.split('-');
  numbers[1] = '****';
  const maskedNumber = numbers.join('-');
  return maskedNumber;
};

export const formatDate = (date: string) => {
  const formattedDate = date.substring(0, 10);
  return formattedDate !== 'Invalid Date' ? formattedDate : '입력 없음';
};
