import { isArray } from 'lodash-es'

import BaseChart from '../../BaseChart'

class ScatterChart extends BaseChart {
  static getScatterDataset (data, settings, extra) {
    const dataset = []
    const { measures } = data

    if (isArray(measures)) {
      measures.forEach(v => {
        dataset.push({
          'source': v.data
        })
      })
    } else {
      return
    }

    return dataset
  }

  static getScatterTooltip (args) {
    return {}
  }

  static getScatterLegend (args) {
    const { settings } = args
    const {
      legendType = 'plain',
      legendPadding = 5
    } = settings

    return {
      type: legendType,
      padding: legendPadding
    }
  }

  static getScatterSeries (args) {
    const { data, settings } = args
    const { connect, ...others } = settings
    // const dataIndex = connect ? connect.dataIndex : -1
    const series = []

    data.measures.forEach(({ name }, i) => {
      series[i] = {
        type: 'scatter',
        name,
        datasetIndex: i,
        ...others
      }
    })

    return series
  }

  static getScatterXAxis (args) {
    const { settings } = args
    const { xAxisScale = false, xAxisName, xAxisNameGap, xAxisNameLocation } = settings
    let axisValue = {
      scale: xAxisScale,
      nameGap: 5,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    }
    // x轴名称
    if (xAxisName) axisValue['name'] = xAxisName
    // 坐标轴名称与轴线之间的距离
    if (xAxisNameGap) axisValue['nameGap'] = xAxisNameGap
    // 坐标轴名称显示位置
    if (xAxisNameLocation) axisValue['nameLocation'] = xAxisNameLocation
    return axisValue
  }

  static getScatterYAxis (args) {
    const { settings } = args
    const { yAxisScale = false, yAxisName } = settings
    let axisValue = {
      scale: yAxisScale,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    }
    if (yAxisName) axisValue['name'] = yAxisName
    return axisValue
  }

  scatter (data, settings, extra) {
    const { tooltipVisible, legendVisible } = extra

    const dataset = ScatterChart.getScatterDataset(data, settings, extra)

    const tooltip = tooltipVisible && ScatterChart.getScatterTooltip({ data })

    const legend = legendVisible && ScatterChart.getScatterLegend({ settings })

    const series = ScatterChart.getScatterSeries({ data, settings })

    const xAxis = ScatterChart.getScatterXAxis({ settings })

    const yAxis = ScatterChart.getScatterYAxis({ settings })

    // build echarts options
    const options = {
      dataset,
      tooltip,
      legend,
      series,
      xAxis,
      yAxis
    }

    console.log(options)

    return options
  }
}

export default ScatterChart
