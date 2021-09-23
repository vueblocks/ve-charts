export const randomIntArrayInRange = (min: number, max: number, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )

// 根据指定范围生成随机数
export const rangeRandom = (min: number, max: number, precision = 2) => {
  return (Math.random() * (max - min) + min).toFixed(precision)
}
