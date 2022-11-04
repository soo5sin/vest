export const useFormatPrice = (price: string) => {
  return Math.floor(Number(price)).toLocaleString();
};
