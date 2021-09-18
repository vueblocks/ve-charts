/* eslint-disable @typescript-eslint/no-explicit-any */
import { App, unref } from 'vue'
import { WithInstall, RefTypedElement, VeChartsData } from './types'
import { round, sum, zip, cloneDeep } from 'lodash-es'

export const toKebabCase = (str: string) =>
  str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const toCamelCase = (arr: string[]) =>
  arr
    .map((str, idx) =>
      idx > 0 ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : str
    )
    .join('')

export const isObject = (prop: any) =>
  Object.prototype.toString.call(prop) === '[object Object]'
export const isEmpty = (prop: any) => prop === null || prop === undefined

// Copied from
// https://github.com/vuejs/vue-next/blob/5a7a1b8293822219283d6e267496bec02234b0bc/packages/shared/src/index.ts#L40-L41
export const isOn = (key: string) => /^on[^a-z]/.test(key)

export const omitOn = (attrs: Record<string, any>) => {
  const result: Record<string, any> = {}
  for (const key in attrs) {
    if (!isOn(key)) {
      result[key] = attrs[key]
    }
  }

  return result
}

export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any
  c.install = (app: App) => {
    app.component(c.name, c)
  }

  return c
}

export const unrefElement = (refEl: RefTypedElement): any => {
  return unref(refEl)
}

// Returns true if the given value is a number, false otherwise.
const validateNumber = (n: any) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n

/**
 * Transform dataset
 * @param data
 * @param settings
 * @param extra
 */
export const getDataset = (
  data: VeChartsData,
  settings?: Record<string, any>,
  extra?: any
) => {
  const cloneData = cloneDeep(data)
  const dimName = cloneData?.dimensions?.name
  const dimData = cloneData?.dimensions?.data

  const stack = settings?.stack || null
  const percentage = settings?.percentage || false

  // when data is not empty and data.dimensions.data is undefiend
  if (!extra?.isEmptyData && dimData === undefined) {
    // Vue.util.warn(`data.dimensions.data is required. Please check on you data`, this)
    return
  }

  /**
   * echarts render problem with dataset
   * problem1: when dimension name a number-like string(e.g., `"1"`), start with number and <= measures.length
   * https://github.com/apache/incubator-echarts/blob/4e4cf884fc8a96b18bd1de537b590042e49df684/src/data/List.js#L339
   * solution: append a ' ' to the dimension name
   * problem2: [piechart] when measure.data start with number
   * solution: use special String instead
   * PS. in version v0.4.6 all seems fixed
   */
  const dimKey = `${dimName}`
  const headMeasure = dimData.length > 0 && dimData[0]

  const dimValue =
    validateNumber(headMeasure) && extra?.chartType === 'pie'
      ? dimData.map((v, i) => (i === 0 ? `${v}` : v))
      : dimData

  const dimensions = {
    [dimKey]: dimValue
  }

  // let [measures, zipSumed] = [{}, []]
  const measures = {}
  let zipSumed: any[] = []

  if (stack && percentage && cloneData.measures.length > 0) {
    const dyadicArray = cloneData.measures.map(col => col.data)
    // 横表转竖表 用于计算百分比堆叠图
    const zipped = zip(...dyadicArray)
    zipSumed = zipped.map((v: any) => {
      const arr = v.map((v: any) => {
        return validateNumber(v) ? v : parseFloat(v)
      })
      return sum(arr)
    })
  }

  cloneData.measures.map(row => {
    const isNumber = validateNumber(row.name)
    const rowName = isNumber ? `${row.name} ` : row.name
    Object.assign(measures, {
      [rowName]:
        stack && percentage
          ? row.data.map((v: any, i) => round(v / zipSumed[i], 4))
          : row.data
    })
  })

  let dims = []
  const firstDim = dimName === undefined ? 'dimension' : dimName
  dims.push(firstDim)
  dims = [...dims, ...cloneData.measures.map(v => v.name)]

  const source = Object.assign({}, dimensions, measures)

  const dataset = {
    dimensions: dims,
    source
  }

  // console.log(JSON.stringify(dataset))

  return dataset
}
