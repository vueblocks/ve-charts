import { getDataset } from '../../utils'

function getPieTooltip (args) {
  return {
    trigger: 'item'
  }
}

function getPieLegend (args) {
  const { settings } = args
  const { legendType, legendPadding } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5
  }
}

function getPieSeries(args) {
  const { data, settings, isDonut } = args
  const { measures } = data
  const {
    offsetY,
    radius = isDonut
      ? ['50%', '70%']
      : [0, '75%'],
    label = {},
    selectedMode = false,
    dimName = 'dimensions'
  } = settings

  const series = []
  // 默认度量第一个属性为饼图值
  const {meaName} = measures.map(v => v.name)
  measures.forEach(({ name, data }, idx) => {
    series.push({
      id: 'pie',
      type: 'pie',
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      label,
      avoidLabelOverlap: !isDonut,
      encode: {
        itemName: dimName,
        value: meaName
      }
    })
  })
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getDataset({ data, settings })

  const tooltip = tooltipVisible && getPieTooltip()

  const legend = legendVisible && getPieLegend({ data, settings })

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
