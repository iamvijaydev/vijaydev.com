import { statSync } from 'node:fs';

export const toInt = (string) => {
  const value = parseInt(string, 10);

  return isNaN(value) ? string : value;
}

export const isFileExits = (filePath) => {
  try {
    const stats = statSync(filePath);

    return stats.isFile() || stats.isDirectory();
  } catch (err) {
    return false;
  }
}

export const camelCaseToNames = (string) => {
  const slug = string
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, '-')
    .toLowerCase();

  let name = string
    .replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  name = name.charAt(0).toUpperCase() + name.slice(1);

  return [slug, name]
}

export const camelCaseToSlug = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export const slugToCamelCase = (string) => {
  return string[0].toUpperCase() + string.substring(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}