// build series
function getWordcloudSeries(args) {
  const {data, settings} = args
  const type = 'wordCloud'
  const series = []
  const seriesItem = {
    type,
    data,
    ...settings
  }
  series.push(seriesItem)
  return series
}

export const wordcloud = (data, settings, extra) => {
  const series = getWordcloudSeries({data, settings})
  const options = {
    series
  }
  return options
}
