export const numberFormat = (val, digits = 2) => {
  if (isNaN(+val)) return val

  let symbolMap = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'B' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]

  for (let i = 0; i < symbolMap.length; i++) {
    if (Math.abs(val) >= symbolMap[i].value) {
      return (val / symbolMap[i].value).toFixed(digits) + symbolMap[i].symbol
    }
  }

  return val.toString()
}

export const formatTausends = (num) => {
  return String(num).replace(/^(\s+|-)?\d+(?=.?\d*($|\s))/g, (m) => {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')
  })
}

export const getFormated = (val, type, digit = 2, defaultVal = '-') => {
  if (val == null || isNaN(val)) return defaultVal
  switch (type) {
    case 'KMB': return numberFormat(val)
    case 'percent': return `${parseFloat((val * 100).toFixed(digit))}%`
    case 'normal': return formatTausends(val)
    default: return val
  }
}

export const getLineKB = (s, v) => {
  const result = []
  result[0] = (s[1] - s[0]) / (v[1] - v[0])
  result[1] = s[0] - result[0] * v[0]
  return result
}

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

const MAP_URL_PREFIX = 'https://unpkg.com/echarts@3.6.2/map/json/'

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

export const clone = (v) => JSON.parse(JSON.stringify(v))

export const getType = (v) => {
  return Object.prototype.toString.call(v)
}

export const toKebab = (v) => v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

// format measure
export const formatMeasure = (value, isFixed) => {
  function isFixedX(num) {
    if (isFixed || (isFixed === 0) || (isFixed === '0')) {
      try {
        return Number(num).toFixed(Number(isFixed))
      } catch (e) {
        return num
      }
    }
    return num
  }

  function formatNumToY(num, flag) {
    function isFixedX(num) {
      if (flag || (flag === 0) || (flag === '0')) {
        try {
          return Number(num).toFixed(Number(flag))
        } catch (e) {
          return num
        }
      }
      return num
    }
    function isInt(number) {
      return parseInt(number) === number
    }

    if (Math.abs(num) >= 1000) {
      return isInt(num / 1000) ? num / 1000 + ' 千' : isFixedX(num)
    } else if (Math.abs(num) >= 100) {
      return isInt(num / 100) ? num / 100 + ' 百' : isFixedX(num)
    } else if (Math.abs(num) >= 10) {
      return isInt(num / 10) ? num / 10 + ' 十' : isFixedX(num)
    } else {
      return isFixedX(num)
    }
  }

  if (Math.abs(value) >= 100000000) {
    return ((value / 100000000) > 100) ? (formatNumToY(value / 100000000, isFixed) + '亿') : (isFixedX(value / 100000000) + ' 亿')
  } else if (Math.abs(value) >= 10000) {
    return ((value / 10000) > 100) ? (formatNumToY(value / 10000, isFixed) + '万') : (isFixedX(value / 10000) + ' 万')
  } else if (Math.abs(value) < 10000) {
    return (Math.abs(value) >= 100) ? formatNumToY(value, isFixed) : isFixedX(value)
  } else return formatNumToY(value, isFixed)
}

export const getDataset = ({ data, settings = {} }) => {
  const {
    dimName = 'dimensions'
  } = settings

  const dimensions = {
    [dimName]: data.dimensions
  }

  let measures = {}

  data.measures.map(v => {
    Object.assign(measures, {
      [v.name]: v.data
    })
  })

  const source = Object.assign({}, dimensions, measures)

  const dataset = {
    source
  }

  return dataset
}

export const strMapToObj = (strMap) => {
  let obj = Object.create(null)

  for (let [k, v] of strMap) {
    console.log(k)

    obj[k] = v
  }

  return obj
}
