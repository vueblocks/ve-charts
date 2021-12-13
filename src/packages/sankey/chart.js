import BaseChart from '../../BaseChart'

class SankeyChart extends BaseChart {
  static getTooltip (settings) {
    return {}
  }

  // build series
  static getSeries ({ data, settings }) {
    const { dimensions, measures } = data
    const {
      orient = 'horizontal',
      draggable = true,
      ...others
    } = settings

    return {
      type: 'sankey',
      data: dimensions, // same as nodes
      edges: measures, // same as links
      orient,
      draggable,
      ...others
    }
  }

  sankey (data, settings, extra) {
    const {
      tooltipVisible,
      isEmptyData
    } = extra

    if (isEmptyData) return {}

    const tooltip = tooltipVisible && SankeyChart.getTooltip(settings)

    const series = SankeyChart.getSeries({ data, settings })

    const options = {
      tooltip,
      series
    }

    // console.log(JSON.stringify(options))

    return options
  }
}

export default SankeyChart
