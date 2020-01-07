import BaseChart from '../../BaseChart'

class LiquidfillChart extends BaseChart {
  // build series
  static getSeries (args) {
    const { measures } = args.data
    const settings = args.settings
    const series = []
    series.push({
      type: 'liquidFill',
      data: [...measures],
      ...settings
    })
    return series
  }

  liquidfill (data, settings, extra) {
    const { isEmptyData } = extra
    const { tooltip } = settings

    if (isEmptyData) return {}

    const series = LiquidfillChart.getSeries({ data, settings })

    const options = {
      tooltip,
      series
    }

    return options
  }
}

export default LiquidfillChart
