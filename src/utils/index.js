import Vue from 'vue'
import { zip, sum, round, cloneDeep, isNaN, isUndefined } from 'lodash-es'
import numeral from 'numeral'
import './formatZhNumber'

const getStackMap = (stack) => {
  const stackMap = {}
  Object.keys(stack).forEach(item => {
    stack[item].forEach(name => {
      stackMap[name] = item
    })
  })
  return stackMap
}

const $get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText))
    }
  })
}

const getMapJSON = ({ mapName, mapUrlPrefix }) => {
  const url = `${mapUrlPrefix}${mapName}.json`
  return $get(url)
}

const getType = (v) => {
  return Object.prototype.toString.call(v)
}

// dataset format
const getDataset = (data, settings, extra) => {
  const cloneData = cloneDeep(data)
  const dimName = cloneData && cloneData.dimensions && cloneData.dimensions.name
  const dimData = cloneData && cloneData.dimensions && cloneData.dimensions.data
  const { isEmptyData, chartType } = extra

  const stack = (settings && settings.stack) || null
  const percentage = (settings && settings.percentage) || false

  // when data is not empty and data.dimensions.data is undefiend
  if (!isEmptyData && dimData === undefined) {
    Vue.util.warn(`data.dimensions.data is required. Please check on you data`, this)
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
  let dimKey = `${dimName}`
  let headMeasure = dimData.length > 0 && dimData[0]

  let dimValue = validateNumber(headMeasure) && chartType === 'pie'
    ? dimData.map((v, i) => i === 0 ? `${v}` : v)
    : dimData

  const dimensions = {
    [dimKey]: dimValue
  }

  let [measures, zipSumed] = [{}, []]

  if (stack && percentage && cloneData.measures.length > 0) {
    const dyadicArray = cloneData.measures.map(col => col.data)
    // 横表转竖表 用于计算百分比堆叠图
    const zipped = zip(...dyadicArray)
    zipSumed = zipped.map(v => {
      const arr = v.map(v => {
        const _temp = validateNumber(v) ? v : parseFloat(v, 10)
        return isNaN(_temp) ? 0 : _temp
      })
      return sum(arr)
    })
  }

  cloneData.measures.map(row => {
    const isNumber = validateNumber(row.name)
    const rowName = isNumber ? `${row.name} ` : row.name
    Object.assign(measures, {
      [rowName]: (stack && percentage)
        ? row.data.map((v, i) => round((v / zipSumed[i]), 4))
        : row.data
    })
  })

  let dims = []
  const firstDim = isUndefined(dimName) ? 'dimension' : dimName
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

// format measure
const formatMeasure = (type, value, digits = 0) => {
  const transformType = (type, value, digits) => {
    const digitReg = digits > 0 ? `0.${'0'.repeat(digits)}` : '0'
    const digitCurReg = digits > 0 ? `0,0.${'0'.repeat(digits)}` : '0,0'
    switch (type) {
      case 'currency':
        return numeral(value).format(digitCurReg)
      case 'en':
        return numeral(value).format(`${digitReg} a`)
      case 'zh':
        return numeral(value).format(`${digitReg} zh`)
      case 'percentage':
        return numeral(value).format(`${digitReg}%`)
      default:
        return value
    }
  }
  return transformType(type, value, digits)
}

// Returns true if the given value is a number, false otherwise.
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n

export {
  getStackMap,
  $get,
  getMapJSON,
  getType,
  getDataset,
  formatMeasure,
  validateNumber
}
