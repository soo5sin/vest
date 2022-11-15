export const useFormatPrice = (price: string) => {
  const formattedPrice = Math.floor(Number(price)).toLocaleString();
  return formattedPrice;
};
