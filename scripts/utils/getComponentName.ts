export const getComponentName = (name: string) =>
  name
    .toLowerCase()
    .replace('-', '')
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");