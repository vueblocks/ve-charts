import { treemapLevels } from '../../base-options'
import BaseChart from '../../BaseChart'

class TreemapChart extends BaseChart {
  static getTreemapTooltip (args) {
    return {
      formatter: '{b}:<br />{c}'
    }
  }

  static getTreemapSeries (args) {
    const { data, settings } = args
    const { measures } = data
    const {
      name = '根级',
      levels = treemapLevels,
      ...others
    } = settings
    const series = []

    series.push({
      type: 'treemap',
      name,
      levels,
      data: measures,
      ...others
    })

    return series
  }

  treemap (data, settings, extra) {
    const { tooltipVisible } = extra

    const tooltip = tooltipVisible && TreemapChart.getTreemapTooltip()

    const series = TreemapChart.getTreemapSeries({ data, settings })

    // build echarts options
    const options = {
      tooltip,
      series
    }
    return options
  }
}

export default TreemapChart
