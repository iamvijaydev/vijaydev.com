const buildHtmls = [];

export const pushHtmlScript = (file) => {
  buildHtmls.push(file);
}

export const getAllHtmlScripts = () => buildHtmls;