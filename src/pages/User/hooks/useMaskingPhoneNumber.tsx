export const useMaskingPhoneNumber = (phone_number: string | undefined) => {
  if (!phone_number) return;
  const numbers = phone_number.split('-');
  numbers[1] = '****';
  return numbers.join('-');
};
