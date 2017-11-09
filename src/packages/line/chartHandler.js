import { formatMeasure } from '../../utils'
import { isUndefined } from 'lodash'

function getLineTooltip (args) {
  return {
    trigger: 'axis'
  }
}

function getLineLegend (args) {
  const { data, settings } = args
  const { measure } = data
  const { legendType, legendPadding } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: measure.map(v => v.name)
  }
}

function getLineDimAxis (args) {
  const { data, settings } = args
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
    },
    data: data.dimension
  }
}

function getLineMeaAxis (args) {
  const { settings } = args
  const { yAxisScale } = settings

  return {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      formatter: (v) => formatMeasure(v)
    }
  }
}

function getLineSeries(args) {
  const { data, settings } = args
  const { measure } = data
  const {
    symbolSize,
    smooth,
    symbol,
    connect
  } = settings
  const series = []
  const dataIndex = connect ? connect.dataIndex : -1

  function getLineStyle (lineParams) {
    return {
      normal: {
        width: 2
      }
    }
  }

  measure.forEach(({ name, data }, i) => {
    series.push({
      data: dataIndex === -1 ? data : getSeriesData(data, {
        index: i,
        connect
      }),
      name,
      type: 'line',
      showSymbol: true,
      lineStyle: getLineStyle(),
      smooth: smooth ? smooth === 'smooth' : true,
      symbol: symbol || 'emptyCircle',
      symbolSize: symbolSize || 4
    })
  })

  return series
}

function getSeriesData(data, options) {
  const {
    index,
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
        symbolSize,
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

export const line = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const tooltip = tooltipVisible && getLineTooltip()

  const legend = legendVisible && getLineLegend({ data, settings })

  const xAxis = getLineDimAxis({ data, settings })

  const yAxis = getLineMeaAxis({ data, settings })

  const series = getLineSeries({ data, settings })

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
