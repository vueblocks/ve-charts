// build series
function getWordcloudSeries (args) {
  const { data, settings } = args
  const { measures } = data
  const type = 'wordCloud'
  const series = []
  const seriesItem = {
    type,
    data: measures,
    ...settings
  }
  series.push(seriesItem)
  return series
}

export const wordcloud = (data, settings, extra) => {
  const { tooltip } = settings
  const series = getWordcloudSeries({ data, settings })
  const options = {
    tooltip,
    series
  }
  return options
}
