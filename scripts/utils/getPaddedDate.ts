export const getPaddedDate = ([year, month, date]: number[]) =>
  `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")}`;
