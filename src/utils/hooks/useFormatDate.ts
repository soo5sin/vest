import dayjs from 'dayjs';

export const useFormatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
