export const stringToBoolean = (value: string) => {
  if (value !== 'true' && value !== 'false') return value;
  return Boolean(value);
};
