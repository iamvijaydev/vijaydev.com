export const getLocaleDateString = (timestamp?: number[], language: string = "en-US") => {
  if (!timestamp) return undefined;

  const [year, month, date] = timestamp;

  return new Date(Date.UTC(year, month - 1, date)).toLocaleDateString(
    language,
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );
};