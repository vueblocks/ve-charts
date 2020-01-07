import BaseChart from '../../BaseChart'
import { getDataset } from '../../utils'

class PolarChart extends BaseChart {
  static getTooltip (settings) {
    return {}
  }

  static getLegend (data) {
    const { measures } = data
    return {
      show: true,
      data: measures.map(v => v.name)
    }
  }

  static getPolar (settings) {
    return {}
  }

  static getAngleAxis (settings) {
    const {
      radial = false
    } = settings

    return {
      type: radial ? 'category' : 'value'
    }
  }

  static getRadiusAxis (settings) {
    const {
      radial = false
    } = settings

    return {
      type: radial ? 'value' : 'category',
      z: 10
    }
  }

  // build series
  static getSeries ({ data, settings }) {
    const { measures } = data
    const {
      polarType = 'line',
      stack = null,
      ...others
    } = settings

    const series = measures.map((item, idx) => {
      return {
        type: polarType,
        coordinateSystem: 'polar',
        stack,
        ...others
      }
    })
    return series
  }

  polar (data, settings, extra) {
    const {
      legendVisible,
      tooltipVisible,
      isEmptyData
    } = extra

    if (isEmptyData) return {}

    const tooltip = tooltipVisible && PolarChart.getTooltip(settings)

    const legend = legendVisible && PolarChart.getLegend(data)

    const polar = PolarChart.getPolar(settings)

    const angleAxis = PolarChart.getAngleAxis(settings)
    const radiusAxis = PolarChart.getRadiusAxis(settings)

    const dataset = !isEmptyData && getDataset(data, settings, extra)

    // console.log(dataset)

    const series = PolarChart.getSeries({ data, settings })

    const options = {
      tooltip,
      legend,
      polar,
      // xAxis
      angleAxis,
      // yAxis
      radiusAxis,
      dataset,
      series
    }

    console.log(JSON.stringify(options))

    return options
  }
}

export default PolarChart
