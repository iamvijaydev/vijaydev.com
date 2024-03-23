export const debounce = (fn: any) => {
  let frame: number;

  return (...args: any[]) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      fn(...args)
    })
  }
}