export const slugToText = (slug: string) => {
  let text = slug.toLowerCase().replaceAll('-', ' ');

  return text.substring(0, 1).toUpperCase() + text.substring(1);
}