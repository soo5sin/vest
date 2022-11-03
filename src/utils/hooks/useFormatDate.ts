import dayjs from 'dayjs';

export const useFormatDate = (date: string) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  if (formattedDate !== 'Invalid Date') return formattedDate;
  return '입력 없음';
};
