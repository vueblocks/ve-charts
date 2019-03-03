function getSeries(args) {
  const {measures} = args.data
  const settings = args.settings
  const series = []
  series.push({
    type: 'liquidFill',
    data: [...measures],
    ...settings
  })
  return series
}

export const liquidFill = (data, settings, extra) => {
  const {isEmptyData} = extra
  const {tooltip} = settings

  if (isEmptyData) return {}

  const series = getSeries({data, settings})

  const options = {
    tooltip,
    series
  }

  return options
}
