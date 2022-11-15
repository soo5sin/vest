export const useMaskingNumber = (number: string) => {
  if (!number) return;

  const first = number.slice(0, 1);
  const middle = number.slice(1, -1);
  const last = number.slice(-1);
  let masking = '';

  for (let i = 0; i < middle.length; i++) {
    masking += '*';
  }

  return first + masking + last;
};
