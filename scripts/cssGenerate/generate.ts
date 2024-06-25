import { outputFile } from "fs-extra";
import { resolve } from "node:path";

import { getMargin, getPadding, getGap } from "./getSpacing";
import { margins, paddings, gaps } from "../../app/styles/generated/registry";

export const generate = async () => {
  console.time(`css generated`);

  const styles = `/* This file is generated. Do not edit it directly. See /scripts/cssGenerate for more info. */

${margins.map(getMargin).join("")}
${paddings.map(getPadding).join("")}
${gaps.map(getGap).join("")}
`;

  await outputFile(
    resolve(process.cwd(), "./app/styles/generated/styles.css"),
    styles
  );

  console.timeEnd(`css generated`);
};

await generate();
