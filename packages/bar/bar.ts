/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption } from 'echarts/core'
import { BarSeriesOption } from 'echarts/charts'
import {
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption
} from 'echarts/components'
import { VeChartsData } from '../types'

import { getDataset } from '../utils'

// Bar Chart Options
type BarChartOptions = ComposeOption<
  BarSeriesOption | GridComponentOption | TitleComponentOption | TooltipComponentOption
>

export default class VeBarChart {
  data: VeChartsData;
  settings?: Record<string, unknown>;
  extra?: any;

  constructor (data: VeChartsData, settings?: Record<string, unknown>, extra?: any) {
    this.data = data
    this.settings = settings
    this.extra = extra
  }

  static getSeries (data: VeChartsData) {
    const { measures } = data
    let series = []

    series = measures.map(({ name }) => {
      return {
        type: 'bar',
        name
      }
    })

    return series
  }

  chartHandler () {
    // build echarts options
    const option = {
      title: {
        text: 'VeBarChart'
      },
      legend: {
        data: ['PV', 'UV']
      },
      tooltip: {},
      xAxis: { type: 'category' },
      yAxis: {},
      dataset: getDataset(this.data),
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: VeBarChart.getSeries(this.data)
    }

    // console.log(option)
    return option
  }
}

export { BarChartOptions }
