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

  ["-3sx-2xs", "--space-3sx-2xs"],
  ["-2sx-xs", "--space-2sx-xs"],
  ["-sx-sm=", "--space-sx-s"],
  ["-s-m", "--space-s-m"],
  ["-m-l", "--space-m-l"],
  ["-lg-xl", "--space-lg-xl"],
  ["-xl-2xl", "--space-xl-2xl"],
  ["-2xl-3xl", "--space-2xl-3xl"],

  ["xs-lg", "--space-xs-l"],
]);

export const breakpointMap = new Map([
  ["sm", "@media (min-width: 576px)"],
  ["md", "@media (min-width: 768px)"],
  ["lg", "@media (min-width: 992px)"],
  ["xl", "@media (min-width: 1200px)"],
  ["max-xl", "@media (max-width: 1200px)"],
]);