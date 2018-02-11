import { getDataset } from '../../utils'

function getPieTooltip (args) {
  return {
    trigger: 'item'
  }
}

function getPieLegend (args) {
  const { settings } = args
  const {
    legendType = 'plain',
    legendPadding = 5
  } = settings
  return {
    type: legendType,
    padding: legendPadding
  }
}

function getPieSeries(args) {
  const { data, settings, isDonut } = args
  const { dimensions, measures } = data
  const {
    offsetY,
    radius = isDonut
      ? ['50%', '70%']
      : [0, '75%'],
    selectedMode = false,
    ...others
  } = settings

  const series = []
  measures.forEach(({ name, data }, idx) => {
    series.push({
      id: 'pie',
      type: 'pie',
      name,
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      avoidLabelOverlap: !isDonut,
      ...others
    })
  })
  console.log(series)
  
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getDataset({ data, settings })

  const tooltip = tooltipVisible && getPieTooltip()

  const legend = legendVisible && getPieLegend({ settings })

  const series = getPieSeries({ data, settings, isDonut })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    series
  }

  // console.log(options)

  return options
}

export const donut = (data, settings, extra) => {
  return pie(data, settings, extra, true)
}
