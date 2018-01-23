function getRadarTooltip() {
  return {
    trigger: 'item'
  }
}

function getRadarLegend(args) {
  const { data, settings } = args
  const { legendType, legendPadding } = settings
  const { measure } = data
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: measure.map(v => v.name)
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
    indicator: data.dimension
  }
}

function getRadarSeries(args) {
  const { settings } = args
  const { measure } = args.data
  const series = []

  measure.forEach((data, idx) => {
    series.push({
      type: 'radar',
      data: [{
        name: data.name,
        value: data.data
      }],
      itemStyle: Object.assign({}, settings.itemStyle)
    })
  })
  return series
}

export const radar = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const tooltip = tooltipVisible && getRadarTooltip()

  const legend = legendVisible && getRadarLegend({ data, settings })

  const radar = getRadarRadar({ data, settings })

  const series = getRadarSeries({ data, settings })

  // build echarts options
  const options = {
    tooltip,
    legend,
    radar,
    series
  }

  console.log(options)

  return options
}
