import dayjs from 'dayjs';

export const useFormatDate = (date: string) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  return formattedDate !== 'Invalid Date' ? formattedDate : '입력 없음';
};
