import {
  options,
  waterfallConfig
} from '../../base-options'

import { getDataset, getStackMap, formatMeasure } from '../../utils'

// build tooltip
function getBarTooltip (args) {
  const { settings } = args
  const { tooltipFormatter } = settings
  return {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'          // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: tooltipFormatter
  }
}

// build legend
function getBarLegend (args) {
  const { data, settings } = args
  const { dimensions, measures } = data
  const { legendType, legendPadding, waterfall } = settings
  let result = {
    type: legendType || 'plain',
    padding: legendPadding || 5
  }
  // 当配置项填入waterfall,瀑布图默认将图例去除辅助--by:jeff
  if (waterfall && waterfall === true) {
    result['data'] = measures.filter(({name}) => {
      if (name !== '辅助') return name
    })
  }
  return result
}

// build grid
function getBarGrid (args) {
  const { isColumn } = args
  return isColumn ? options.grid : {
    right: 30,
    bottom: 10,
    left: 30,
    containLabel: true
  }
}

// build dimension Axis
function getBarDimAxis (args) {
  const { settings } = args
  const { dimAxisType } = settings

  const axisItem = {
    type: dimAxisType,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
    }
  }
  const disAxis = []
  disAxis.push(axisItem)
  return disAxis
}

// build measure axis
function getBarMeaAxis (args) {
  const { data, settings } = args
  const {
    meaAxisType,
    yAxisScale = false,
    secondMeaAxis
  } = settings

  const meaAxisBase = {
    type: 'value',
    scale: yAxisScale || false,
    axisTick: {
      show: false
    }
  }
  const meaAxisNames = data.measures.map(v => v.name)
  const secondMeaAxisIndex = meaAxisNames.findIndex(v => v === secondMeaAxis)

  const meaAxis = []
  meaAxisType.forEach((type, i) => {
    const axisLabel = {
      margin: 10,
      fontWeight: 400
    }
    if (type !== 'normal') {
      axisLabel.formatter = (value) => formatMeasure(type, value)
    }
    const axisItem = {
      ...meaAxisBase,
      axisLabel
    }
    meaAxis.push(axisItem)
  })
  return meaAxis
}

// build label
function getBarLabel(args) {
  const { setLabel, settings } = args
  const { isColumn } = settings
  const {
    fontFamily = 'sans-serif',
    fontSize = '12',
    fontWeight = 'normal',
    position = isColumn ? 'top' : 'right',
    ...others
  } = setLabel
  return {
    position,
    fontFamily,
    fontSize,
    fontWeight,
    ...others
  }
}

// build series
function getBarSeries(args) {
  const { data, settings, isColumn } = args
  const { dimensions, measures } = data
  const {
    label = {},
    showLine = [],
    stack = null,
    secondMeaAxis = null,
    itemStyle = {},
    waterfall,
    ...others
  } = settings

  const axisIndexName = isColumn ? 'yAxisIndex' : 'xAxisIndex'
  const series = []
  const stackMap = stack && getStackMap(stack)

  const getEncode = (name) => {
    const xEncode = isColumn ? dimensions.name : name
    const yEncode = isColumn ? name : dimensions.name
    return {
      x: xEncode,
      y: yEncode
    }
  }

  measures.forEach(({name, data}, i) => {
    // label数据类型调整为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置----by:Jeff
    let setLabel = {}
    if (label instanceof Array) {
      setLabel = label.filter(item => item.name === name)[0]
      if (setLabel === undefined) setLabel = {}
    } else {
      setLabel = label
    }
    // ------------end-----------
    const type = showLine.includes(name) ? 'line' : 'bar'
    const seriesItem = {
      type,
      name,
      encode: getEncode(name),
      label: getBarLabel({setLabel, settings: { isColumn }}),
      stack: (stack && stackMap[name]) && stackMap[name],
      [axisIndexName]: secondMeaAxis === name ? '1' : '0',
      itemStyle: itemStyle[name] ? itemStyle[name] : {},
      ...others
    }
    // 当配置项填入waterfall,瀑布图默认将辅助图设置透明--by:jeff
    if (waterfall && waterfall === true) {
      if (name === '辅助') {
        seriesItem['itemStyle'] = waterfallConfig[name]
      }
    }
    series.push(seriesItem)
  })
  return series
}

export const bar = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra
  const {
    direction = 'column',
    secondMeaAxis = null,
    yAxisType,
    yAxisName,
    xAxisType,
    xAxisName
  } = settings

  // 默认柱状图
  const isColumn = direction === 'column'

  const defaultMeaAxisType = secondMeaAxis !== null ? ['normal', 'normal'] : ['normal']

  settings.meaAxisType = (isColumn ? yAxisType : xAxisType) || defaultMeaAxisType
  settings.meaAxisName = (isColumn ? yAxisName : xAxisName) || []
  settings.dimAxisType = (isColumn ? xAxisType : yAxisType) || 'category'
  settings.dimAxisName = (isColumn ? xAxisName : yAxisName) || ''

  const dataset = getDataset(data)

  const tooltip = tooltipVisible && getBarTooltip({ settings })

  const legend = legendVisible && getBarLegend({ data, settings })

  const grid = getBarGrid({ isColumn })

  const xAxis = isColumn ? getBarDimAxis({ settings }) : getBarMeaAxis({ data, settings })

  const yAxis = isColumn ? getBarMeaAxis({ data, settings }) : getBarDimAxis({ settings })

  const series = getBarSeries({ data, settings, isColumn })

  // build echarts options
  const options = {
    grid,
    dataset,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  console.log(options)

  return options
}
