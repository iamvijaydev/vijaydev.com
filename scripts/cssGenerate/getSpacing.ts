import {
  shortNameMap,
  directionMap,
  valueMap,
  breakpointMap,
} from "./mappings";

const getSpacing = (propertyName: string) => (name: string) => {
  let [breakpoint, className] = name.split(":");

  if (className === undefined) className = breakpoint;

  const [propDirection, value] = className.split("-");
  const direction = propDirection.replace(shortNameMap.get(propertyName)!, "");

  let properties = [propertyName];

  if (direction === "x")
    propertyName === "gap"
      ? (properties = ['column-gap'])
      : [`${propertyName}-left`, `${propertyName}-right`];
  if (direction === "y")
    propertyName === "gap"
      ? (properties = ['row-gap'])
      : [`${propertyName}-top`, `${propertyName}-bottom`];

  if (directionMap.has(direction)) {
    properties = [`${propertyName}-${directionMap.get(direction)}`];
  }

  const propertyValue = properties
    .map((property) => `${property}: var(${valueMap.get(value)})`)
    .join(";");

  if (breakpoint !== name && breakpointMap.has(breakpoint)) {
    return `${breakpointMap.get(breakpoint)} {
  .${breakpoint}\:${className} {
    ${propertyValue};
  }
}`;
  }

  return `.${className} {
  ${propertyValue};
}`;
};

export const getMargin = getSpacing("margin");
export const getPadding = getSpacing("padding");
export const getGap = getSpacing("gap");
