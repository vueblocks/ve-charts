import BaseChart from '../../BaseChart'

class SunburstChart extends BaseChart {
  // build tooltip
  static getBarTooltip (args) {
    const { settings } = args
    const { tooltip } = settings
    return {
      ...tooltip
    }
  }

  // build series
  static getSunburstSeries (args) {
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

  sunburst (data, settings, extra) {
    const tooltip = SunburstChart.getBarTooltip({
      settings
    })

    const series = SunburstChart.getSunburstSeries({
      data,
      settings
    })

    const options = {
      series
    }
    if (Object.keys(tooltip).length !== 0) options['tooltip'] = tooltip

    console.log(options)

    return options
  }
}

export default SunburstChart
