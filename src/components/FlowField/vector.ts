/*
  Johan Karlsson
  https://github.com/DonKarlssonSan/vectory
  MIT License, see Details View

  A reduced set of methods
*/

export class Vector {
  x: number;
  y: number;

  static create(x: number, y: number) {
    return new Vector(x, y);
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  addTo(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v: Vector) {
    return new Vector(
      this.x - v.x,
      this.y - v.y
    );
  }

  setAngle(angle: number) {
    const  length = this.getLength();
  
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  
    return this;
  }

  setLength(length: number) {
    const angle = this.getAngle();

    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;

    return this;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  getLength() {
    return Math.hypot(this.x, this.y);
  }

  div(by: number) {
    return Vector.create(this.x / by, this.y / by);
  }
  
  copy() {
    return Vector.create(this.x, this.y);
  }

  getArray() {
    return [this.x, this.y];
  }
}

export type ParticleConfig = {
  particleSpeed: number;
}
export type ParticleContext = {
  config?: ParticleConfig;
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
}

export class Particle {
  head: Vector;
  history: Vector[];
  vel: Vector;
  acc: Vector;
  size: number;
  maxLength: number;
  context: ParticleContext;

  static create(x: number, y: number, context: ParticleContext) {
    return new Particle(x, y, context);
  }

  constructor(x: number, y: number, context: ParticleContext) {
    this.head = Vector.create(x, y);
    this.history = [this.head];
    this.vel = Vector.create(Math.random() - 0.5, Math.random() - 0.5);
    this.acc = Vector.create(0, 0);
    this.size = 1;
    this.maxLength = 50;
    this.context = context;
  }

  move(acc?: Vector) {
    if (acc) {
      this.acc.addTo(acc);
    }
    this.vel.addTo(this.acc);

    this.head = this.head.copy();
    this.history.push(
      this.head.addTo(this.vel)
    );
    if (this.history.length > this.maxLength) {
      this.history.shift();
    }

    // if (this.vel.getLength() > this.context.config.particleSpeed / 50) {
    //   this.vel.setLength(this.context.config.particleSpeed / 50);
    // }
    if (this.vel.getLength() > 1) {
      this.vel.setLength(1);
    }
    // this.acc.x = 0;
    // this.acc.y = 0;
    this.acc.setLength(0);
  }

  draw() {
    this.context.ctx.fillRect(this.head.x, this.head.y, this.size, this.size);
  }

  drawLine() {
    this.context.ctx.beginPath();
    this.context.ctx.moveTo(this.head.x, this.head.y);
    for (let i = this.history.length - 2; i > 0; i--) {
      this.context.ctx.lineTo(this.history[i].x, this.history[i].y);
      // if (this.history[i].x < this.context.w && this.history[i].y < this.context.h) {
      // }
    }
    // this.context.ctx.
    this.context.ctx.stroke();
  }

  wrap() {
    return;
    for (let i = 0, j = this.history.length; i < j; i++) {
      if (this.history[i].x > this.context.w) {
        this.history[i].x = 0;
      } else if (this.history[i].x < -this.size) {
        this.history[i].x = this.context.w - 1;
      }
      if (this.history[i].y > this.context.h) {
        this.history[i].y = 0;
      } else if (this.head.y < -this.size) {
        this.history[i].y = this.context.h - 1;
      }
    }
    // not needed maybe, test it
    // this.head = this.history[this.maxLength - 1];
  }
}