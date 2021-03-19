import { formatMeasure } from '../../utils'
import BaseChart from '../../BaseChart'

class RadarChart extends BaseChart {
  static getRadarTooltip () {
    return {
      trigger: 'item'
    }
  }

  static getRadarLegend (args) {
    const { data, settings } = args
    const { legendType = 'plain', legendPadding = 5 } = settings
    const { measures } = data
    return {
      type: legendType,
      padding: legendPadding,
      data: measures.map(v => v.name)
    }
  }

  static getRadarRadar (args) {
    const { data, settings } = args
    const { offsetY = '50%', radius = '75%', splitNumber = 5, shape = 'polygon', splitArea = {}, name = {} } = settings

    return {
      name: {
        padding: [3, 5],
        ...name
      },
      center: ['50%', offsetY],
      radius,
      splitNumber,
      shape,
      splitArea,
      indicator: data.dimensions
    }
  }

  static getRadarLabel (args) {
    const {
      formatType = 'currency',
      formatDigits = 0,
      ...others
    } = args
    const formatter = params => {
      const { value } = params
      // dataset formatter need shift the value
      return formatMeasure(formatType, value, formatDigits)
    }
    return {
      normal: {
        formatter,
        ...others
      }
    }
  }

  static getRadarSeries ({ data, settings }) {
    const { measures } = data
    const { label, itemStyle } = settings
    const series = []

    measures.forEach((data, idx) => {
      series.push({
        type: 'radar',
        data: [{
          name: data.name,
          value: data.data
        }],
        label: label && RadarChart.getRadarLabel(label),
        itemStyle: Object.assign({}, itemStyle)
      })
    })
    return series
  }

  static getRadiusPolar ({ data, settings }) {
    const { splitNumber = 5, offsetY = '50%', radius = '75%', axisLabel = {}, axisLine = {} } = settings
    const max = data.dimensions[0].max
    const min = 0
    const interval = (max - min) / splitNumber

    return {
      polar: {
        radius,
        center: ['50%', offsetY]
      },
      radiusAxis: {
        min,
        max,
        interval: Math.round(interval * 100) / 100,
        splitLine: {
          show: false
        },
        axisLabel,
        axisLine
      },
      angleAxis: {
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    }
  }

  radar (data, settings, extra) {
    const { tooltipVisible, legendVisible, isEmptyData, tickMarkVisible } = extra

    if (isEmptyData) return {}

    const tooltip = tooltipVisible && RadarChart.getRadarTooltip()

    const legend = legendVisible && RadarChart.getRadarLegend({ data, settings })

    const radar = RadarChart.getRadarRadar({ data, settings })

    const series = RadarChart.getRadarSeries({ data, settings })

    const polarOptions = tickMarkVisible ? RadarChart.getRadiusPolar({ data, settings }) : {}

    // build echarts options
    const options = {
      tooltip,
      legend,
      radar,
      series,
      ...polarOptions
    }

    return options
  }
}

export default RadarChart
