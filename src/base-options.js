export const options = {
  grid: {
    right: 10,
    bottom: 10,
    left: 10,
    containLabel: true
  },
  series: [
  ]
}

export const itemPoint = (color) => {
  return [
    '<span style="',
    `background-color:${color};`,
    'display: inline-block;',
    'width: 10px;',
    'height: 10px;',
    'border-radius: 50%;',
    'margin-right:2px;',
    '"></span>'
  ].join('')
}

export const color = [
  '#5282e4', '#40b17e', '#ffd600', '#f88d48', '#2ebce2',
  '#f35352', '#ce62d6', '#8954d4', '#5257b8', '#d42d6b'
]

export const treemapLevels = [
  {
    itemStyle: {
      normal: {
        borderColor: '#fff'
      }
    }
  }, {
    colorSaturation: [0.3, 0.6],
    itemStyle: {
      normal: {
        borderColorSaturation: 0.7,
        gapWidth: 5,
        borderWidth: 2
      }
    }
  }, {
    colorSaturation: [0.3, 0.5],
    itemStyle: {
      normal: {
        borderColorSaturation: 0.6
      }
    }
  }, {
    colorSaturation: [0.3, 0.5]
  }
]

export const waterfallConfig = {
  secondaryMeasure: {
    normal: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    },
    emphasis: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    }
  }
}

export const MAP_URL_PREFIX = 'https://unpkg.com/echarts@4.1.0/map/json/'

export default {
  options,
  itemPoint,
  color,
  treemapLevels,
  waterfallConfig,
  MAP_URL_PREFIX
}
