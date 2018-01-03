import { formatMeasure } from '../../utils'
import { isUndefined } from 'lodash'

function getBarTooltip (args) {
  return {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'          // 默认为直线，可选为：'line' | 'shadow'
    }
  }
}

function getBarLegend (args) {
  const { data, settings } = args
  const { measures } = data
  const { legendType, legendPadding } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: measures.map(v => v.name)
  }
}

function getBarDimAxis (args) {
  const { data, settings } = args
  const { dimAxisType } = settings

  const axisItem = {
    type: dimAxisType,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
    },
    data: data.dimensions
  }
  const disAxis = []
  disAxis.push(axisItem)
  return disAxis
}

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
        fontWeight: 400,
        formatter: (value) => formatMeasure(value)
      }
    }
    const axisItem = Object.assign({}, meaAxisBase, formatter)
    meaAxis.push(axisItem)
  })
  return meaAxis
}

// build label
function getLabel(args, isBar) {
  const {
    showLabel,
    labelFontFamily = 'sans-serif',
    labelFontSize = '12',
    labelFontWeight = 'normal',
    labelColor = 'auto',
    labelPosition
  } = args
  const defaultPosition = isBar ? 'top' : 'right'
  const position = labelPosition === 'auto' ? defaultPosition : labelPosition
  return {
    normal: {
      show: showLabel,
      position,
      fontFamily: labelFontFamily,
      fontSize: labelFontSize,
      fontWeight: labelFontWeight,
      color: labelColor
    }
  }
}

function getBarSeries(args) {
  const {
    data,
    isBar,
    showLine = [],
    labelStyle = {},
    connect
  } = args
  const { measures } = data
  const secondDimAxisIndex = isBar ? 'yAxisIndex' : 'xAxisIndex'
  const series = []
  const dataIndex = connect ? connect.dataIndex : -1

  measures.forEach((item, i) => {
    const { name, data } = item
    const type = showLine.includes(name) ? 'line' : 'bar'
    const seriesItem = {
      name,
      type,
      [secondDimAxisIndex]: showLine.includes(name) ? '1' : '0',
      data: dataIndex === -1 ? data : getSeriesData(data, {
        index: i,
        type,
        connect
      }),
      label: getLabel(labelStyle, isBar)
    }

    series.push(seriesItem)
  })
  return series
}

function getSeriesData(data, options) {
  const {
    index,
    type,
    connect: {
      dataIndex,
      seriesIndex,
      symbolSize,
      normalShadowBlur
    }
  } = options

  if (!isUndefined(seriesIndex) && index !== seriesIndex) {
    return data
  }

  return data.map((v, i) => {
    if (i === dataIndex) {
      return {
        ...v,
        symbolSize: type === 'line' ? symbolSize : null,
        itemStyle: {
          normal: {
            shadowBlur: !isUndefined(normalShadowBlur) ? normalShadowBlur : 0
          }
        }
      }
    }
    return v
  })
}

export const bar = (data, settings, extra, isBar = true) => {
  const { tooltipVisible, legendVisible } = extra
  const {
    showLine,
    labelStyle,
    yAxisType,
    yAxisName,
    xAxisType,
    xAxisName,
    connect
  } = settings

  const defaultMeaAxisType = showLine ? ['normal', 'normal'] : ['normal']

  settings.meaAxisType = (isBar ? yAxisType : xAxisType) || defaultMeaAxisType
  settings.meaAxisName = (isBar ? yAxisName : xAxisName) || []
  settings.dimAxisType = (isBar ? xAxisType : yAxisType) || 'category'
  settings.dimAxisName = (isBar ? xAxisName : yAxisName) || ''

  const tooltip = tooltipVisible && getBarTooltip()

  const legend = legendVisible && getBarLegend({ data, settings })

  const xAxis = isBar ? getBarDimAxis({ data, settings }) : getBarMeaAxis({ data, settings })

  const yAxis = isBar ? getBarMeaAxis({ data, settings }) : getBarDimAxis({ data, settings })

  const series = getBarSeries({
    data,
    showLine,
    labelStyle,
    isBar,
    connect
  })

  // build echarts options
  const options = {
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  return options
}

export const strip = (data, settings, extra) => {
  return bar(data, settings, extra, false)
}
