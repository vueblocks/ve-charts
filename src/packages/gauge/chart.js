import BaseChart from '../../BaseChart'

class GaugeChart extends BaseChart {
  static getGaugeTooltip () {
    return {
      trigger: 'item'
    }
  }

  static getGaugeSeries (args) {
    const { data, settings } = args
    const { name, data: gaugeData } = data && data.measures && data.measures[0]
    const {
      min = 0,
      max = 100,
      offsetY,
      radius = '75%',
      ...others
    } = settings

    return [{
      name,
      type: 'gauge',
      min,
      max,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      data: gaugeData,
      ...others
    }]
  }

  gauge (data, settings, extra) {
    const { tooltipVisible } = extra

    const tooltip = tooltipVisible && GaugeChart.getGaugeTooltip()

    const series = GaugeChart.getGaugeSeries({
      data,
      settings
    })

    // build echarts options
    const options = {
      tooltip,
      series
    }
    console.log(JSON.stringify(options))
    return options
  }
}

export default GaugeChart
