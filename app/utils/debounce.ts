export const debounce = (fn: (...args: unknown[]) => unknown) => {
  let frame: number;

  return (...args: unknown[]) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      fn(...args)
    })
  }
}