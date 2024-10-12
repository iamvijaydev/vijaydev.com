import {
  breakpointMap,
  gridColumnBreakpointMap,
} from "./mappings";

// @todo: club all @media queries for the same breakpoint together
export const generateGridClassNames = (name: string) => {
  let [breakpoint, className] = name.split(":");

  if (className === undefined) className = breakpoint;

  let [colOrRow, startOrEnd, rawValue] = className.split("-");
  let value: number;

  if (rawValue === undefined) {
    value = parseInt(startOrEnd, 10);
    (startOrEnd as any) = undefined;
  } else {
    value = parseInt(rawValue, 10);
  }

  const direction = colOrRow === "col" ? "column" : "row";
  const suffix = startOrEnd ? `-${startOrEnd}` : "";

  const propertyName = `grid-${direction}${suffix}`;
  const propertyValue = startOrEnd ? value : `span ${value}`;

  if (breakpointMap.has(breakpoint)) {
    return `\n${breakpointMap.get(breakpoint)} {
  .grid .${breakpoint}\\:${className} {
    ${propertyName}: ${propertyValue};
  }
}`;
  }

  if (value < 6) {
    return `\n.grid .${className} {
  ${propertyName}: ${propertyValue};
}`;
  }

  let allClasses = `\n.grid .${className} {
  ${propertyName}: ${startOrEnd ? 4 : `span ${4}`};
}`;

  gridColumnBreakpointMap.forEach((breakMatch, breakValue) => {
    if (breakValue < value) {
      allClasses += `\n${breakMatch} {
  .grid .${className} {
    ${propertyName}: ${startOrEnd ? breakValue : `span ${breakValue}`};
  }
}`;
    } else {
      allClasses += `\n${breakMatch} {
  .grid .${className} {
    ${propertyName}: ${startOrEnd ? value : `span ${value}`};
  }
}`;
    }
  });

  return allClasses;
};

