export const textToSlug = (text: string) =>
  text.toLowerCase().replaceAll(' ', '-');