import BaseChart from '../../BaseChart'

class WordcloudChart extends BaseChart {
  // build series
  static getWordcloudSeries (args) {
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

  wordcloud (data, settings, extra) {
    const { tooltip } = settings
    const series = WordcloudChart.getWordcloudSeries({
      data,
      settings
    })
    const options = {
      tooltip,
      series
    }
    return options
  }
}

export default WordcloudChart
