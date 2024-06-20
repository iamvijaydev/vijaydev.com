export const getUtcDateString = ([year, month, date]: number[]) =>
  new Date(year, month - 1, date).toUTCString();