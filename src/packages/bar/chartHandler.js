import { options } from '../../base-options'
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
  const { settings } = args
  const { legendType, legendPadding, legendData } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: legendData
  }
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
  const { label, settings } = args
  const { isColumn } = settings
  const {
    fontFamily = 'sans-serif',
    fontSize = '12',
    fontWeight = 'normal',
    position = isColumn ? 'top' : 'right',
    ...others
  } = label
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
    const type = showLine.includes(name) ? 'line' : 'bar'
    const seriesItem = {
      type,
      name,
      encode: getEncode(name),
      label: getBarLabel({label, settings: { isColumn }}),
      stack: (stack && stackMap[name]) && stackMap[name],
      [axisIndexName]: secondMeaAxis === name ? '1' : '0',
      itemStyle: itemStyle[name] ? itemStyle[name] : {},
      ...others
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

  const legend = legendVisible && getBarLegend({ settings })

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
