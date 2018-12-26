import { options, waterfallConfig } from '../../base-options'
import { getDataset, getStackMap, formatMeasure } from '../../utils'

// build tooltip
function getBarTooltip(settings) {
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
function getBarLegend(data, settings) {
  const { measures } = data
  const { legendType, legendPadding, waterfall } = settings
  let result = {
    type: legendType || 'plain',
    padding: legendPadding || 5
  }
  // 当配置项填入waterfall,瀑布图默认将图例去除secondaryMeasure--by:jeff
  if (waterfall && waterfall === true) {
    result['data'] = measures.filter(({name}) => {
      if (name !== 'secondaryMeasure') return name
    })
  }
  return result
}

// build grid
function getBarGrid(isBar) {
  const BarGrid = {
    right: 30,
    bottom: 10,
    left: 30,
    containLabel: true
  }
  return isBar ? BarGrid : options.grid
}

// build dimension Axis
function getBarDimAxis(settings) {
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
function getBarMeaAxis(data, settings) {
  const {
    meaAxisType,
    meaAxisDigits,
    yAxisScale = false,
    percentage = false,
  } = settings

  const meaAxisBase = {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    min: percentage ? 0 : null,
    max: percentage ? 1 : null
  }

  const meaAxis = []
  meaAxisType.forEach((type, i) => {
    const axisLabel = {
      margin: 10,
      fontWeight: 400
    }
    if (type !== 'normal') {
      axisLabel.formatter = value => formatMeasure(type, value, meaAxisDigits)
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
function getBarLabel(setLabel, isBar) {
  const {
    position = isBar ? 'right' : 'top',
    formatType = 'currency',
    formatDigits = 0,
    ...others
  } = setLabel
  const formatter = params => {
    const { value, seriesIndex } = params
    // dataset formatter need shift the value
    value.shift()
    return formatMeasure(formatType, value[seriesIndex], formatDigits)
  }
  return {
    position,
    formatter,
    ...others
  }
}

// build series
function getBarSeries(data, settings, isBar) {
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

  const axisIndexName = isBar ? 'xAxisIndex' : 'yAxisIndex'
  const series = []
  const stackMap = stack && getStackMap(stack)

  const getEncode = name => {
    const xEncode = isBar ? name : dimensions.name
    const yEncode = isBar ? dimensions.name : name
    return {
      x: xEncode,
      y: yEncode
    }
  }

  measures.forEach(({ name }) => {
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
      label: getBarLabel(setLabel, isBar),
      stack: stack && stackMap[name],
      [axisIndexName]: secondMeaAxis === name ? '1' : '0',
      itemStyle: itemStyle[name] ? itemStyle[name] : {},
      ...others
    }
    // 当配置项填入waterfall,瀑布图默认将secondaryMeasure图设置透明--by:jeff
    if (waterfall && waterfall === true) {
      if (name === 'secondaryMeasure') {
        seriesItem['itemStyle'] = waterfallConfig[name]
      }
    }
    series.push(seriesItem)
  })
  return series
}

export const bar = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra
  const {
    direction = 'column',
    secondMeaAxis = null,
    yAxisLabelType,
    yAxisLabelDigits = 0,
    yAxisName,
    xAxisLabelType,
    xAxisLabelDigits = 0,
    xAxisName
  } = settings

  // 默认柱状图
  const isBar = direction !== 'column' && direction === 'row'

  const defaultMeaAxisType = secondMeaAxis !== null ? ['normal', 'normal'] : ['normal']
  
  settings.meaAxisType = (isBar ? xAxisLabelType : yAxisLabelType) || defaultMeaAxisType
  settings.meaAxisDigits = isBar ? xAxisLabelDigits : yAxisLabelDigits
  settings.meaAxisName = (isBar ? xAxisName : yAxisName) || []
  settings.dimAxisType = (isBar ? yAxisLabelType : xAxisLabelType) || 'category'
  settings.dimAxisDigits = isBar ? yAxisLabelDigits : xAxisLabelDigits
  settings.dimAxisName = (isBar ? yAxisName : xAxisName) || ''
  
  // 如果设置了双Y轴，将双Y轴统一设置 meaAxisType
  if (defaultMeaAxisType.length > settings.meaAxisType.length) {
    settings.meaAxisType = defaultMeaAxisType.fill(settings.meaAxisType[0])
  }

  const dataset = !isEmptyData && getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getBarTooltip(settings)

  const legend = legendVisible && getBarLegend(data, settings)

  const grid = getBarGrid(isBar)

  const xAxis = isBar ? getBarMeaAxis(data, settings) : getBarDimAxis(settings)
  
  const yAxis = isBar ? getBarDimAxis(settings) : getBarMeaAxis(data, settings)

  const series = getBarSeries(data, settings, isBar)

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

  // console.log(options)

  return options
}
