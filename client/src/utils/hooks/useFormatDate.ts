export const useFormatDate = (date: string) => {
  const formattedDate = date.substring(0, 10);
  return formattedDate !== 'Invalid Date' ? formattedDate : '입력 없음';
};
