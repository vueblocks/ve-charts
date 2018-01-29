import { options } from '../../base-options'
import { getDataset, getStackMap } from '../../utils'

// build tooltip
function getBarTooltip (args) {
  return {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'          // 默认为直线，可选为：'line' | 'shadow'
    }
  }
}

// build legend
function getBarLegend (args) {
  const { settings } = args
  const { legendType, legendPadding } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5
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
  const { settings } = args
  const { meaAxisType, yAxisScale } = settings

  const meaAxisBase = {
    type: 'value',
    scale: yAxisScale || false,
    axisTick: {
      show: false
    }
  }
  const meaAxis = []
  meaAxisType.forEach((v, i) => {
    // custom formatter
    const formatter = {
      axisLabel: {
        margin: 10,
        fontWeight: 400
        // formatter: (value) => formatMeasure(value)
      }
    }
    const axisItem = Object.assign({}, meaAxisBase, formatter)
    meaAxis.push(axisItem)
  })
  return meaAxis
}

// build label
function getBarLabel(args) {
  const { label, settings } = args
  const { isColumn } = settings
  const {
    show,
    fontFamily = 'sans-serif',
    fontSize = '12',
    fontWeight = 'normal',
    color,
    position = isColumn ? 'top' : 'right'
  } = label
  return {
    normal: {
      show,
      position,
      fontFamily,
      fontSize,
      fontWeight,
      color
    }
  }
}

// build series
function getBarSeries(args) {
  const { data, settings, isColumn } = args
  const { dimensions, measures } = data
  const {
    label = {},
    seriesLayoutBy = 'column',
    showLine = [],
    stack = null,
    ...others
  } = settings

  const secondDimAxisIndex = isColumn ? 'yAxisIndex' : 'xAxisIndex'
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
      seriesLayoutBy,
      stack: (stack && stackMap[name]) && stackMap[name],
      [secondDimAxisIndex]: showLine.includes(name) ? '1' : '0',
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
    showLine,
    yAxisType,
    yAxisName,
    xAxisType,
    xAxisName
  } = settings

  // 默认柱状图
  const isColumn = direction === 'column'

  const defaultMeaAxisType = showLine ? ['normal', 'normal'] : ['normal']

  settings.meaAxisType = (isColumn ? yAxisType : xAxisType) || defaultMeaAxisType
  settings.meaAxisName = (isColumn ? yAxisName : xAxisName) || []
  settings.dimAxisType = (isColumn ? xAxisType : yAxisType) || 'category'
  settings.dimAxisName = (isColumn ? xAxisName : yAxisName) || ''

  const dataset = getDataset({ data, settings })

  const tooltip = tooltipVisible && getBarTooltip()

  const legend = legendVisible && getBarLegend({ settings })

  const grid = getBarGrid({ isColumn })

  const xAxis = isColumn ? getBarDimAxis({ settings }) : getBarMeaAxis({ settings })

  const yAxis = isColumn ? getBarMeaAxis({ settings }) : getBarDimAxis({ settings })

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
