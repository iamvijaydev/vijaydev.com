type Red = number;
type Blue = number;
type Green = number;
type RGB = [Red, Blue, Green]

export const hexToRgb = (hex: string): RGB => {
  if (hex[0] === '#') {
    hex = hex.substring(1);
  }

  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  if (hex.length !== 6) {
      throw "Only six-digit hex colors are allowed.";
  }

  let aRgbHex = hex.match(/.{1,2}/g);

  if (aRgbHex === null) {
    throw "rgb conversion failed";
  }

  let aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];

  return aRgb as RGB;
}