import dayjs from "dayjs";

export const formatNumber = (number: Number): string => {
  return number.toLocaleString(); // 세자리수마다 콤마
};

export const formatDate = (date: string, format?: string): string => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};
