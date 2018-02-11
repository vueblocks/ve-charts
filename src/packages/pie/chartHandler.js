import { getDatasetArray } from '../../utils'

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
  // const { dimensions, measures } = data
  const { measures } = data
  const {
    offsetY,
    radius = isDonut
      ? ['50%', '70%']
      : [0, '75%'],
    selectedMode = false,
    ...others
  } = settings

  // 默认度量第一个属性为饼图值
  // const { name: dimName } = dimensions
  // const [meaName = ''] = measures.map(v => v.name)
  measures.forEach(({ name, data }, idx) => {
    series.push({
      // id: 'pie',
      type: 'pie',
      name,
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      avoidLabelOverlap: !isDonut,
      datasetIndex: datasetIndex,
      // encode: {
      //   itemName: dimName,
      //   value: meaName
      // },
      ...others
    })
  })
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getDatasetArray(data, settings)

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
