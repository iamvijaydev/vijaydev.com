import {
  breakpointMap,
} from "./mappings";

// @todo: club all @media queries for the same breakpoint together
export const generateGridClassNames = (name: string) => {
  let [breakpoint, className] = name.split(":");

  if (className === undefined) className = breakpoint;

  let [colOrRow, startOrEnd, value] = className.split("-");

  if (value === undefined) {
    value = startOrEnd;
    (startOrEnd as any) = undefined;
  }

  const direction = colOrRow === "col" ? "column" : "row";
  const suffix = startOrEnd ? `-${startOrEnd}` : "";

  const propertyName = `grid-${direction}${suffix}`;
  const propertyValue = startOrEnd ? value : `span ${value}`;

  if (breakpoint !== name && breakpointMap.has(breakpoint)) {
    return `${breakpointMap.get(breakpoint)} {
  .grid .${breakpoint}\\:${className} {
    ${propertyName}: ${propertyValue};
  }
}`;
  }

  return `.grid .${className} {
  ${propertyName}: ${propertyValue};
}`;
};
