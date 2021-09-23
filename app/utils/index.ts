export const randomIntArrayInRange = (min: number, max: number, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )

export const rangeRandom = (min: number, max: number, precision = 2) => {
  return (Math.random() * (max - min) + min).toFixed(precision)
}

export const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
