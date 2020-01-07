import BaseChart from '../../BaseChart'
import { getDataset } from '../../utils'

class PieChart extends BaseChart {
  static getPieDataset (data, settings, extra) {
    const dataset = []

    extra.chartType = 'pie'
    if (!data.length || data.length === 1) {
      dataset.push(getDataset(data, settings, extra))
    } else if (data.length > 1) {
      for (let element of data) {
        dataset.push(getDataset(element, settings, extra))
      }
    }
    return dataset
  }

  static getPieTooltip (args) {
    return {
      trigger: 'item'
    }
  }

  static getPieLegend (args) {
    const { data, settings } = args
    let dimensions
    if (Array.isArray(data) && data.length > 0) {
      dimensions = data[0].dimensions
    } else {
      dimensions = data.dimensions
    }
    const {
      legendType = 'plain',
      legendPadding = 5,
      legendSelected = dimensions.data.length
    } = settings

    const getSelected = n => {
      let obj = {}
      // console.log(dimensions.data)
      const legendNames = dimensions.data.slice(n)

      for (let legend of legendNames) {
        obj[legend] = false
      }

      return obj
    }

    return {
      type: legendType,
      padding: legendPadding,
      selected: getSelected(legendSelected)
    }
  }

  static getPieSeries (args) {
    const { data, settings, isDonut } = args

    let series = []

    if (data.length === undefined) {
      series = this.handleData(data, settings, isDonut)
    } else if (data.length === 1) {
      series = this.handleData(data[0], settings, isDonut)
    } else if (data.length === 2) {
      for (let index in data) {
        series.push(this.handleData(data[index], settings[index], isDonut, index)[0])
      }
    }
    return series
  }

  static handleData (data, settings, isDonut, datasetIndex = 0) {
    const series = []
    const { measures } = data
    const {
      offsetY,
      radius = isDonut
        ? ['50%', '70%']
        : [0, '75%'],
      selectedMode = false,
      ...others
    } = settings

    measures.forEach(({ name, data }, idx) => {
      series.push({
        type: 'pie',
        name,
        selectedMode,
        center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
        radius,
        datasetIndex,
        ...others
      })
    })
    // console.log(series)

    return series
  }

  static chartHandler (data, settings, extra, isDonut = false) {
    const { tooltipVisible, legendVisible } = extra

    const dataset = PieChart.getPieDataset(data, settings, extra)

    const tooltip = tooltipVisible && PieChart.getPieTooltip()

    const legend = legendVisible && PieChart.getPieLegend({ data, settings })

    const series = PieChart.getPieSeries({
      data,
      settings,
      isDonut
    })

    // build echarts options
    const options = {
      dataset,
      tooltip,
      legend,
      series
    }

    // console.log(options)
    // console.log(JSON.stringify(options))
    return options
  }

  pie (data, settings, extra) {
    return PieChart.chartHandler(data, settings, extra, false)
  }

  donut (data, settings, extra) {
    return PieChart.chartHandler(data, settings, extra, true)
  }
}

export default PieChart
