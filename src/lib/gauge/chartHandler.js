function getGaugeTooltip() {
  return {
    trigger: 'item'
  }
}

function getGaugeSeries(args) {
  const { data, settings } = args
  const { measure } = data
  const { name, value } = measure[0]
  const { max, offsetY, radius } = settings

  return [{
    name,
    type: 'gauge',
    min: 0,
    max: max || value * 2,
    center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
    radius: radius || '75%',
    data: [{
      name,
      value
    }]
  }]
}

export const gauge = (data, settings, extra) => {
  const { tooltipVisible } = extra

  const tooltip = tooltipVisible && getGaugeTooltip()

  const series = getGaugeSeries({ data, settings })

  // build echarts options
  const options = {
    tooltip,
    series
  }
  console.log(options)
  return options
}
