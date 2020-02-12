import BaseChart from '../../BaseChart'

class SankeyChart extends BaseChart {
  static getTooltip (settings) {
    return {}
  }

  // build series
  static getSeries ({ data, settings }) {
    const { measures } = data
    const { nodes, links } = measures
    const {
      orient = 'horizontal',
      draggable = true,
      focusNodeAdjacency = false,
      ...others
    } = settings

    return {
      type: 'sankey',
      data: nodes,
      edges: links,
      orient,
      draggable,
      focusNodeAdjacency,
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
