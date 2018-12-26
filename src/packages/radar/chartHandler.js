function getRadarTooltip() {
  return {
    trigger: 'item'
  }
}

function getRadarLegend(args) {
  const { data, settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings
  const { measures } = data
  return {
    type: legendType,
    padding: legendPadding,
    data: measures.map(v => v.name)
  }
}

function getRadarRadar(args) {
  const { data, settings } = args
  const { offsetY = '50%', radius = '75%', splitNumber = 5, shape = 'polygon', splitArea = {} } = settings

  return {
    name: {
      textStyle: {
        padding: [3, 5]
      }
    },
    center: ['50%', offsetY],
    radius,
    splitNumber,
    shape,
    splitArea,
    indicator: data.dimensions
  }
}

function getRadarSeries(args) {
  const { itemStyle } = args
  const { measures } = args.data
  const series = []

  measures.forEach((data, idx) => {
    series.push({
      type: 'radar',
      data: [{
        name: data.name,
        value: data.data
      }],
      itemStyle: Object.assign({}, itemStyle)
    })
  })
  return series
}

export const radar = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra
  const { itemStyle } = settings

  if (isEmptyData) return {}

  const tooltip = tooltipVisible && getRadarTooltip()

  const legend = legendVisible && getRadarLegend({ data, settings })

  const radar = getRadarRadar({ data, settings })

  const series = getRadarSeries({ data, itemStyle })

  // build echarts options
  const options = {
    tooltip,
    legend,
    radar,
    series
  }

  // console.log(options)

  return options
}
