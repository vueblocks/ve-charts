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
  '#19d4ae', '#5ab1ef', '#fa6e86',
  '#ffb980', '#0067a6', '#c4b4e4',
  '#d87a80', '#9cbbff', '#d9d0c7',
  '#87a997', '#d49ea2', '#5b4947',
  '#7ba3a8'
]

export const treemapLevels = [{
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
}]

export default {
  options,
  itemPoint,
  color,
  treemapLevels
}
