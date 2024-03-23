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
 *
 */

  class Grad {
    x: number;
    y: number;
    z: number;
    constructor(x:number, y:number, z:number) {
    this.x = x; this.y = y; this.z = z;
    }
    dot2(x:number, y:number) {
      return this.x*x + this.y*y;
    };
  
    dot3(x:number, y:number, z:number) {
      return this.x*x + this.y*y + this.z*z;
    };
  }
  

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  function seed(value: number) {
    if(value > 0 && value < 1) {
      // Scale the value out
      value *= 65536;
    }

    value = Math.floor(value);
    if(value < 256) {
      value |= value << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (value & 255);
      } else {
        v = p[i] ^ ((value>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 3D simplex noise
  function simplex3(xin: number, yin: number, zin: number) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

/*
  Johan Karlsson
  https://github.com/DonKarlssonSan/vectory
  MIT License, see Details View

*/


class Vector {
  x:number;
  y:number;
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  add(v:Vector) {
    return new Vector(
    this.x + v.x,
    this.y + v.y);
  }

  addTo(v:Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v:Vector) {
    return new Vector(
    this.x - v.x,
    this.y - v.y);
  }

  subFrom(v:Vector) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mult(n:number) {
    return new Vector(this.x * n, this.y * n);
  }

  multTo(n:number) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n:number) {
    return new Vector(this.x / n, this.y / n);
  }

  divTo(n:number) {
    this.x /= n;
    this.y /= n;
  }

  setAngle(angle:number) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  setLength(length:number) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  getLength() {
    return Math.hypot(this.x, this.y);
  }

  getLengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  distanceTo(v:Vector) {
    return this.sub(v).getLength();
  }

  distanceToSq(v:Vector) {
    return this.sub(v).getLengthSq();
  }

  manhattanDistanceTo(v:Vector) {
    return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  rotate(angle:number) {
    return new Vector(
    this.x * Math.cos(angle) - this.y * Math.sin(angle),
    this.x * Math.sin(angle) + this.y * Math.cos(angle));

  }

  rotateTo(angle:number) {
    let x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    let y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    this.x = x;
    this.y = y;
    return this;
  }

  rotateAround(v:Vector, angle:number) {
    let x = (this.x - v.x) * Math.cos(angle) - (v.y - this.y) * Math.sin(angle) + v.x;
    let y = (this.x - v.x) * Math.sin(angle) + (v.y - this.y) * Math.cos(angle) + v.y;
    return new Vector(x, y);
  }

  rotateMeAround(v:Vector, angle:number) {
    let x = (this.x - v.x) * Math.cos(angle) - (v.y - this.y) * Math.sin(angle) + v.x;
    let y = (this.x - v.x) * Math.sin(angle) + (v.y - this.y) * Math.cos(angle) + v.y;
    this.x = x;
    this.y = y;
    return this;
  }

  equals(v:Vector) {
    return this.x == v.x && this.y == v.y;
  }

  reflectAlongX() {
    this.y *= -1;
  }

  reflectAlongY() {
    this.x *= -1;
  }

  getArray() {
    return [this.x, this.y];
  }
}

class Particle {
  pos:Vector;
  vel:Vector;
  acc:Vector;
  size:number;
  ctx: CanvasRenderingContext2D;
  w:number;
  h:number;
  maxLength: number;
  points: Vector[];

  constructor(x:number, y:number, ctx: CanvasRenderingContext2D, w: number, h: number) {
    this.vel = new Vector(Math.random() - 0.5, Math.random() - 0.5);
    this.acc = new Vector(0, 0);
    this.size = 1;
    this.ctx = ctx;
    this.w = w;
    this.h = h;
    this.maxLength = 20;
    this.pos = new Vector(x, y);
    this.points = [this.pos];
  }
  
  move(acc:Vector) {
    if(acc) {
      this.acc.addTo(acc);
    }
    this.vel.addTo(this.acc);

    const next = this.pos.copy().addTo(this.vel);
    this.points.push(next);
    if (this.points.length > this.maxLength) {
      this.points.shift();
    }
    this.pos = next;

    if(this.vel.getLength() > 1) {
      this.vel.setLength(1);
    }
    this.acc.setLength(0);
  }
  
  draw() {
    this.points.forEach(each => {
      this.ctx.fillRect(each.x, each.y, this.size, this.size);
    });
  }
  
  wrap() {
    this.points.forEach(each => {
      if(each.x > this.w) {
        each.x = 0;
      } else if(each.x < -this.size) {
        each.x = this.w - 1;
      }
      if(each.y > this.h) {
        each.y = 0;
      } else if(each.y < -this.size) {
        each.y = this.h - 1;
      }
    });
  }
}

export const vectorFlowField = () => {
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let field: number[][][];

  let w: number;
  let h: number;
  let isContainer = false;
  let inputW: number;
  let inputH: number;

  let size: number /* gap */;
  let columns: number;
  let rows: number;
  let noiseZ: number /* time in 3d */;
  let strokeStyle: string = 'rgba(0, 0, 0, 0.2)';
  let particles: Particle[];
  
  function setup(elId: string | HTMLCanvasElement | null) {
    if (!elId) {
      return;
    }

    size = 12;
    noiseZ = 0;
    seed(Math.random());

    if (typeof elId === 'string') {
      canvas = document.querySelector(elId) as HTMLCanvasElement;
    }
    else {
      canvas = elId
    }
    ctx = canvas.getContext("2d")!;

    if (!canvas || !ctx) {
      return false;
    }

    reset();
    if (!isContainer) {
      window.addEventListener("resize", reset);
    }

    return true;
  }
  
  function reset() {
    if (isContainer) {
      w = canvas.width = inputW;
      h = canvas.height = inputH;
    } else {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    columns = Math.floor(w / size) + 1;
    rows = Math.floor(h / size) + 1;
    drawBackground();
    initParticles();
  }
  
  function initParticles() {
    particles = [];
    let numberOfParticles = w * h / 10000;
    for(let i = 0; i < numberOfParticles; i++) {
      let particle = new Particle(
        Math.random() * w, 
        Math.random() * h,
        ctx,
        w,
        h
        );
      particles.push(particle);
    }
  }
  
  function draw(now: number) {
    requestAnimationFrame(draw);
    calculateField();
    // noiseZ = now * 0.0002;
    noiseZ = now * 0.02;
    drawBackground();
    drawParticles();
  }
  
  function calculateField() {
    field = new Array(columns);
    for(let x = 0; x < columns; x++) {
      field[x] = new Array(columns);
      for(let y = 0; y < rows; y++) {
        let angle = simplex3(x/20, y/20, noiseZ) * Math.PI * 2;
        let length = simplex3(x/50 + 40000, y/50 + 40000, noiseZ) * 0.3;
        let v = new Vector(0, length);
        v.setAngle(angle);
        field[x][y] = v.getArray();
      }
    }
  }
  
  function drawBackground() {
    // ctx.fillStyle = `rgba(0, 0, 0, ${alpha || 0.07})`;
    // ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
  }
  
  function drawParticles() {
    // let hue = Math.sin(noiseZ) * 30;
    // ctx.fillStyle = `hsla(${hue}, 50%, 50%, 0.1)`;
    ctx.fillStyle = strokeStyle;
    particles.forEach(p => {
      p.draw();
      let pos = p.pos.div(size);
      
      if(pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
        const poi = field[Math.floor(pos.x)][Math.floor(pos.y)];
          let v = new Vector(
          poi[0],
          poi[1]
        );
        p.move(v);
      }
      p.wrap();
    });
  }
  
  const drawVectorField = (
    elId: string | HTMLCanvasElement | null,
    width?: number,
    height?: number,
    color?: string
  ) => {
    if (typeof width === 'number' || typeof height === 'number') {
      isContainer = true;
      inputW = width!;
      inputH = height!;
    }

    if (typeof color === 'string') {
      strokeStyle = color;
    }

    const ready = setup(elId);

    if (ready) {
      draw(performance.now());
    }
  }

  const updateContainerSize = (nextW: number, nextH: number) => {
    isContainer = true;
    inputW = nextW;
    inputH = nextH;
    reset();
  }

  const updateDrawColor = (color: string) => {
    strokeStyle = color;
  }

  return {
    drawVectorField,
    updateContainerSize,
    updateDrawColor
  }
}