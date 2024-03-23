/**
 * Original code: https://codepen.io/DonKarlssonSan/pen/jBWaad
 * Converted to ESNext
 */

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 */

import { p } from './constants';

// To remove the need for index wrapping, double the permutation table length
export let perm = new Array(512);
export let gradP = new Array(512);

class Grad {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  dot2(x: number, y: number) {
    return this.x * x + this.y * y;
  }

  dot3(x: number, y: number, z: number) {
    return this.x * x + this.y * y + this.z * z;
  }
}

const grad3 = [
  new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
  new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
  new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
];

export const seed = (value: number) => {
  if (value > 0 && value < 1) {
    // Scale the value out
    value *= 65536;
  }

  value = Math.floor(value);
  if (value < 256) {
    value |= value << 8;
  }

  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ (value & 255);
    } else {
      v = p[i] ^ ((value >> 8) & 255);
    }

    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
};

// initilize seed
seed(0);