function getRadarTooltip() {
  return {
    trigger: 'item'
  }
}

function getRadarLegend(args) {
  const { data, settings } = args
  const { legendType, legendPadding } = settings
  const { measures } = data
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: measures.map(v => v.name)
  }
}

function getRadarRadar(args) {
  const { data, settings } = args
  const { offsetY, radius } = settings

  return {
    name: {
      textStyle: {
        padding: [3, 5]
      }
    },
    center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
    radius: radius || '75%',
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
  const { tooltipVisible, legendVisible } = extra
  const {
    itemStyle
  } = settings

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
