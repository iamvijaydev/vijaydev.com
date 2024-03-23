import { useMediaQuery } from "./useMediaQuery";

export const useIsDarkMode = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    initializeWithValue: false,
  });

  return isDarkMode;
};
