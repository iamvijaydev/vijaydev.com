import { seed } from './lib/seed';
import { simplex3 } from './lib/simplex3';

export const vectorField = () => {
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

  function setup(elId: string | HTMLCanvasElement | null) {
    if (!elId) {
      return;
    }

    size = 20;
    noiseZ = 0;

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

  function initField() {
    field = new Array(columns);

    for (let x = 0; x < columns; x++) {
      field[x] = new Array(columns);
      for (let y = 0; y < rows; y++) {
        field[x][y] = [0, 0];
      }
    }
  }

  function calculateField() {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = simplex3(x / 50, y / 50, noiseZ) * Math.PI * 2;
        let length = simplex3(x / 100 + 40000, y / 100 + 40000, noiseZ);
        field[x][y][0] = angle;
        field[x][y][1] = length;
      }
    }
  }

  function reset() {
    if (isContainer) {
      w = canvas.width = inputW;
      h = canvas.height = inputH;
    } else {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    seed(Math.random());
    columns = Math.floor(w / size) + 1;
    rows = Math.floor(h / size) + 1;
    initField();
  }

  function draw(now: number) {
    requestAnimationFrame(draw);
    calculateField();
    noiseZ = now * 0.0002;
    clear();
    drawField();
  }

  function clear() {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
  }

  function drawField() {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = field[x][y][0];
        let length = field[x][y][1];
        ctx.save();
        ctx.translate(x * size, y * size);
        ctx.rotate(angle);
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();

        // ctx.moveTo(0, 0);
        // ctx.lineTo(0, size * length);
        // ctx.stroke();

        ctx.rect(x, y, 1, 1);
        // ctx.rect(0, size * length, 2, 2);

        // ctx.moveTo(0, size * length);
        // if (length > 0) {
        //   ctx.arc(0, 0, 2, 0, 2 * Math.PI)
        // }
        
        ctx.fill();
        ctx.restore();
      }
    }
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