import { getDataset } from '../../utils'

function getPieDataset (data, settings, extra) {
  const dataset = []

  if (!data.length || data.length === 1) {
    dataset.push(getDataset(data, settings, extra))
  } else if (data.length > 1) {
    for (let element of data) {
      dataset.push(getDataset(element, settings, extra))
    }
  }
  return dataset
}

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

  let series = []

  if (data.length === undefined) {
    series = handleData(data, settings, isDonut)
  } else if (data.length === 1) {
    series = handleData(data[0], settings, isDonut)
  } else if (data.length === 2) {
    for (let index in data) {
      series.push(handleData(data[index], settings[index], isDonut, index)[0])
    }
  }
  return series
}

function handleData(data, settings, isDonut, datasetIndex = 0) {
  const series = []
  const { measures } = data
  const {
    offsetY,
    radius = isDonut
      ? ['50%', '70%']
      : [0, '75%'],
    selectedMode = false,
    ...others
  } = settings

  measures.forEach(({ name, data }, idx) => {
    series.push({
      type: 'pie',
      name,
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      datasetIndex,
      ...others
    })
  })
  // console.log(series)
  
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getPieDataset(data, settings, extra)

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
  console.log(JSON.stringify(options))
  return options
}

export const donut = (data, settings, extra) => {
  return pie(data, settings, extra, true)
}
