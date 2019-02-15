import Vue from 'vue'
import { zip, sum, round } from 'lodash'
import numeral from 'numeral'
import './formatZhNumber'

export const getStackMap = (stack) => {
  const stackMap = {}
  Object.keys(stack).forEach(item => {
    stack[item].forEach(name => {
      stackMap[name] = item
    })
  })
  return stackMap
}

export const $get = (url) => {
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

const MAP_URL_PREFIX = 'https://unpkg.com/echarts@4.1.0/map/json/'

export const getMapJSON = (position) => {
  return $get(`${MAP_URL_PREFIX}${position}.json`)
}

let mapPromise = null

export const getBmap = (key) => {
  if (!mapPromise) {
    mapPromise = new Promise((resolve, reject) => {
      const callbackName = `bmap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        'https://api.map.baidu.com/api?v=2.0',
        `ak=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return mapPromise
}

export const deepClone = (v) => JSON.parse(JSON.stringify(v))

export const getType = (v) => {
  return Object.prototype.toString.call(v)
}

export const toKebab = (v) => v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

// dataset format
export const getDataset = (data, settings, extra) => {
  const dimName = data && data.dimensions && data.dimensions.name || 'dimensions'
  const dimData = data && data.dimensions && data.dimensions.data
  const { isEmptyData } = extra

  const stack = (settings && settings.stack) || null
  const percentage = (settings && settings.percentage) || false

  // when data is not empty and data.dimensions.data is undefiend
  if (!isEmptyData && dimData === undefined) {
    Vue.util.warn(`data.dimensions.data is required. Please check on you data`, this)
    return
  }

  const dimensions = {
    [dimName]: dimData
  }

  let [measures, zipSumed] = [{}, []]
  
  if (stack && percentage && data.measures.length > 0) {
    const dyadicArray = data.measures.map(col => col.data)
    // 横表转竖表 用于计算百分比堆叠图
    const zipped = zip(...dyadicArray)
    zipSumed = zipped.map(v => sum(v))
  }

  data.measures.map(row => {
    Object.assign(measures, {
      [row.name]: (stack && percentage)
        ? row.data.map((v, i) => round((v / zipSumed[i]), 4))
        : row.data
    })
  })
  
  const source = Object.assign({}, dimensions, measures)

  const dataset = { source }

  return dataset
}

// format measure
export const formatMeasure = (type, value, digits = 0) => {
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