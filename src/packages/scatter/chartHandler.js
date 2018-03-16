import { isArray } from 'lodash'

function getScatterDataset (data) {
  const dataset = []
  const { measures } = data

  if (isArray(measures)) {
    measures.forEach(v => {
      dataset.push({
        ['source']: v.data
      })
    })
  } else {
    return
  }

  return dataset
}

function getScatterTooltip(args) {
  return {}
}

function getScatterLegend(args) {
  const { settings } = args
  const {
    legendType = 'plain',
    legendPadding = 5
  } = settings

  return {
    type: legendType,
    padding: legendPadding,
  }
}

function getScatterSeries(args) {
  const { data, settings } = args
  const { connect, ...others } = settings
  // const dataIndex = connect ? connect.dataIndex : -1
  const series = []

  data.measures.forEach(({ name }, i) => {
    series[i] = {
      type: 'scatter',
      name,
      datasetIndex: i,
      ...others
    }
  })

  return series
}

function getScatterXAxis(args) {
  const { settings } = args
  const { xAxisScale = false } = settings
  return {
    scale: xAxisScale,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  }
}

function getScatterYAxis(args) {
  const { settings } = args
  const { yAxisScale = false } = settings

  return {
    scale: yAxisScale,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  }
}

export const scatter = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getScatterDataset(data, settings)

  const tooltip = tooltipVisible && getScatterTooltip({ data })

  const legend = legendVisible && getScatterLegend({ settings })

  const series = getScatterSeries({ data, settings })

  const xAxis = getScatterXAxis({ settings })

  const yAxis = getScatterYAxis({ settings })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    series,
    xAxis,
    yAxis
  }

  console.log(options)

  return options
}
