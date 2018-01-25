// import { formatMeasure, getStackMap, getDataset } from '../../utils'
import { getStackMap, getDataset } from '../../utils'

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
function getBarLabel(args, isBar) {
  const {
    show,
    fontFamily = 'sans-serif',
    fontSize = '12',
    fontWeight = 'normal',
    color,
    position = isBar ? 'top' : 'right'
  } = args
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
  const { data, settings, isBar } = args
  const { dimensions, measures } = data
  const {
    label = {},
    seriesLayoutBy = 'column',
    showLine = [],
    stack = null,
    ...others
  } = settings
  const secondDimAxisIndex = isBar ? 'yAxisIndex' : 'xAxisIndex'
  const series = []
  const stackMap = stack && getStackMap(stack)

  console.log(dimensions.name)

  const getEncode = (name) => {
    const xEncode = dimensions.name
    const yEncode = name
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
      label: getBarLabel(label, isBar),
      seriesLayoutBy,
      stack: (stack && stackMap[name]) && stackMap[name],
      [secondDimAxisIndex]: showLine.includes(name) ? '1' : '0',
      ...others
    }

    series.push(seriesItem)
  })
  return series
}

export const bar = (data, settings, extra, isBar = true) => {
  const { tooltipVisible, legendVisible } = extra
  const {
    showLine,
    yAxisType,
    yAxisName,
    xAxisType,
    xAxisName
  } = settings

  const defaultMeaAxisType = showLine ? ['normal', 'normal'] : ['normal']

  settings.meaAxisType = (isBar ? yAxisType : xAxisType) || defaultMeaAxisType
  settings.meaAxisName = (isBar ? yAxisName : xAxisName) || []
  settings.dimAxisType = (isBar ? xAxisType : yAxisType) || 'category'
  settings.dimAxisName = (isBar ? xAxisName : yAxisName) || ''

  const dataset = getDataset({ data, settings })

  const tooltip = tooltipVisible && getBarTooltip()

  const legend = legendVisible && getBarLegend({ settings })

  const xAxis = isBar ? getBarDimAxis({ settings }) : getBarMeaAxis({ settings })

  const yAxis = isBar ? getBarMeaAxis({ settings }) : getBarDimAxis({ settings })

  const series = getBarSeries({ data, settings, isBar })

  // build echarts options
  const options = {
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

export const strip = (data, settings, extra) => {
  return bar(data, settings, extra, false)
}
