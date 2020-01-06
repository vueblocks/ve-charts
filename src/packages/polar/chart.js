import BaseChart from '../../BaseChart'
import { getDataset } from '../../utils'

class PolarChart extends BaseChart {
  static getTooltip (settings) {
    return {}
  }

  static getLegend (data) {
    return {
      show: true,
      data: data.dimensions.data
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
      type: radial ? 'value' : 'category'
    }
  }

  // build series
  static getSeries ({ data, settings }) {
    const { dimensions, measures } = data
    const { name } = dimensions
    const {
      polarType = 'line',
      stack = null,
      radial = false,
      others
    } = settings

    const series = measures.map((item, idx) => {
      return {
        type: polarType,
        coordinateSystem: 'polar',
        encode: {
          tooltip: dimensions.data[idx],
          angle: radial ? name : item.name,
          radius: radial ? item.name : name
        },
        stack,
        ...others
      }
    })
    return series
  }

  polar (data, settings, extra) {
    const { isEmptyData } = extra

    if (isEmptyData) return {}

    const tooltip = PolarChart.getTooltip(settings)

    const legend = PolarChart.getLegend(data)

    const polar = PolarChart.getPolar(settings)

    const angleAxis = PolarChart.getAngleAxis(settings)
    const radiusAxis = PolarChart.getRadiusAxis(settings)

    const dataset = !isEmptyData && getDataset(data, settings, extra)

    console.log(dataset)

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
