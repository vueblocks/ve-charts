// build tooltip
function getBarTooltip (args) {
  const { settings } = args
  const { tooltip } = settings
  return {
    ...tooltip
  }
}

// build series
function getSunburstSeries (args) {
  const { data, settings } = args
  const { measures } = data
  const {
    label = {},
    itemStyle = {},
    ...others
  } = settings

  const series = []

  measures.forEach(({ name, data }, i) => {
    const type = 'sunburst'
    const seriesItem = {
      type,
      name,
      data,
      label,
      itemStyle,
      ...others
    }
    series.push(seriesItem)
  })
  return series
}

export const sunburst = (data, settings, extra) => {
  const tooltip = getBarTooltip({ settings })

  const series = getSunburstSeries({ data, settings })

  const options = {
    series
  }
  if (Object.keys(tooltip).length !== 0) options['tooltip'] = tooltip

  console.log(options)

  return options
}
