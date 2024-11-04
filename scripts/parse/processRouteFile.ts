import path from "node:path";
import { processIndexFile } from "./processIndexFile";
import { processTsxFile } from "./processTsxFile";
import { processMdxFile } from "./processMdxFile";
import { InternalRouteData, ContentItemDetailed } from "../types";

export const processRouteFile = async (
  filepath: string
): Promise<[string, InternalRouteData | InternalRouteData<ContentItemDetailed>] | undefined> => {
  const base = "app/routes/";
  const routePart = filepath.replace(base, "");

  const parts = routePart.split("/");
  const fileName = parts.pop();

  if (!fileName) {
    return;
  }

  const ext = path.extname(fileName);

  if (!ext) {
    return;
  }

  let route = processIndexFile(base, parts, fileName);

  if (route) {
    return ['', route];
  }

  route = processTsxFile(ext, fileName, parts, base);

  if (route) {
    return ['', route];
  }

  return await processMdxFile(ext, fileName, parts, base);
};
