import { getDataset, formatMeasure } from '../../utils'

function getLineTooltip(args) {
  return {
    trigger: 'axis'
  }
}

function getLineLegend(args) {
  const { settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings
  return {
    type: legendType,
    padding: legendPadding
  }
}

function getLineDimAxis(args) {
  const { settings } = args
  const type = settings.yAxisType || 'category'
  return {
    type,
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
    }
  }
}

function getLineMeaAxis(args) {
  const { settings } = args
  const {
    yAxisScale,
    yAxisLabelType,
    yAxisLabelDigits,
    yAxisName,
    yAxisInterval,
    yAxisMax,
    yAxisMin
  } = settings

  let axisValue = {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      formatter: value => formatMeasure(yAxisLabelType, value, yAxisLabelDigits)
    }
  }
  if (yAxisName) axisValue['name'] = yAxisName
  if (yAxisInterval) axisValue['interval'] = Number(yAxisInterval)
  if (yAxisMax) axisValue['max'] = yAxisMax
  if (yAxisMin) axisValue['min'] = yAxisMin

  return axisValue
}

// build label
function getLineLabel(args) {
  const {
    position = 'top',
    formatType = 'currency',
    formatDigits = 0,
    ...others
  } = args
  const formatter = params => {
    const { value, seriesIndex } = params
    // dataset formatter need shift the value
    value.shift()
    return formatMeasure(formatType, value[seriesIndex], formatDigits)
  }
  return {
    normal: {
      position,
      formatter,
      ...others
    }
  }
}

function getLineSeries(args) {
  const { data, settings } = args
  const { measures } = data
  const {
    label = {},
    showSymbol = true,
    smooth = false,
    stack = null,
    step = null,
    symbol = 'emptyCircle',
    symbolSize = 4,
    ...others
  } = settings
  const series = []

  function getLineStyle(lineParams) {
    return {
      normal: {
        width: 2
      }
    }
  }

  measures.forEach(({ name, data }, i) => {
    series.push({
      type: 'line',
      name,
      label: getLineLabel(label),
      lineStyle: getLineStyle(),
      showSymbol,
      smooth,
      stack,
      step,
      symbol,
      symbolSize,
      ...others
    })
  })

  return series
}

export const line = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra

  extra.chartType = 'line'
  const dataset = !isEmptyData && getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getLineTooltip()

  const legend = legendVisible && getLineLegend({ settings })

  const xAxis = getLineDimAxis({ settings })

  const yAxis = getLineMeaAxis({ settings })

  const series = !isEmptyData && getLineSeries({ data, settings })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  // console.log(JSON.stringify(options))

  return options
}
