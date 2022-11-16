export const useMaskingPhoneNumber = (phone_number: string) => {
  const numbers = phone_number.split('-');
  numbers[1] = '****';
  const maskedNumber = numbers.join('-');
  return maskedNumber;
};
