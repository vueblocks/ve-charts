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
    const { offsetY = '50%', radius = '75%', splitNumber = 5, shape = 'polygon', splitArea = {} } = settings

    return {
      name: {
        textStyle: {
          padding: [3, 5]
        }
      },
      center: ['50%', offsetY],
      radius,
      splitNumber,
      shape,
      splitArea,
      indicator: data.dimensions
    }
  }

  static getRadarSeries (args) {
    const { itemStyle } = args
    const { measures } = args.data
    const series = []

    measures.forEach((data, idx) => {
      series.push({
        type: 'radar',
        data: [{
          name: data.name,
          value: data.data
        }],
        itemStyle: Object.assign({}, itemStyle)
      })
    })
    return series
  }

  radar (data, settings, extra) {
    const { tooltipVisible, legendVisible, isEmptyData } = extra
    const { itemStyle } = settings

    if (isEmptyData) return {}

    const tooltip = tooltipVisible && RadarChart.getRadarTooltip()

    const legend = legendVisible && RadarChart.getRadarLegend({ data, settings })

    const radar = RadarChart.getRadarRadar({ data, settings })

    const series = RadarChart.getRadarSeries({ data, itemStyle })

    // build echarts options
    const options = {
      tooltip,
      legend,
      radar,
      series
    }

    // console.log(options)

    return options
  }
}

export default RadarChart
