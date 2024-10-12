export const shortNameMap = new Map([
  ['margin', 'm'],
  ['padding', 'p'],
  ['gap', 'gap'],
]);

export const directionMap = new Map([
  ["t", "top"],
  ["r", "right"],
  ["b", "bottom"],
  ["l", "left"],
]);

export const valueMap = new Map([
  ["3xs", "--space-3xs"],
  ["2xs", "--space-2xs"],
  ["xs", "--space-xs"],
  ["s", "--space-s"],
  ["m", "--space-m"],
  ["l", "--space-l"],
  ["xl", "--space-xl"],
  ["2xl", "--space-2xl"],
  ["3xl", "--space-3xl"],

  ["3xs-2xs", "--space-3xs-2xs"],
  ["2xs-xs", "--space-2xs-xs"],
  ["xs-s", "--space-xs-s"],
  ["s-m", "--space-s-m"],
  ["m-l", "--space-m-l"],
  ["lg-xl", "--space-lg-xl"],
  ["xl-2xl", "--space-xl-2xl"],
  ["2xl-3xl", "--space-2xl-3xl"],

  ["xs-lg", "--space-xs-l"],
]);

export const breakpointMap = new Map([
  ["md", "@media (min-width: 608px)"],
  ["lg", "@media (min-width: 800px)"],
  ["xl", "@media (min-width: 1184px)"],
  ["max-xl", "@media (max-width: 1184px)"],
]);

export const gridColumnBreakpointMap = new Map([
  [6, "@media (min-width: 608px)"],
  [8, "@media (min-width: 800px)"],
  [12, "@media (min-width: 1184px)"],
])