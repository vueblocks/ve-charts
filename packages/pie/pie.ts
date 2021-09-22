/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { PieSeriesOption } from 'echarts/charts'

import { VeChartsData, ChartCommonOption } from '../types'

import { getDataset } from '../utils'

// Pie Chart Options
type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>

type PieVariants = 'pie' | 'donut'

export interface PieChartSettings extends PieSeriesOption {
  // describe donut type
  variant?: PieVariants
}

export default class Pie {
  $props: any
  data: VeChartsData
  settings: PieChartSettings
  isDonut: boolean

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.isDonut = this.settings?.variant === 'donut'
  }

  getPieDataset() {
    const dataset = []
    const data = this.data
    const settings = this.settings

    if (!Array.isArray(data)) {
      dataset.push(getDataset(data, settings, { chartType: 'pie' }))
    } else if (Array.isArray(data) && data.length > 1) {
      for (const element of data) {
        dataset.push(getDataset(element, settings, { chartType: 'pie' }))
      }
    }
    return dataset
  }

  getPieTooltip() {
    return {
      trigger: 'item'
    }
  }

  getPieSeries() {
    let series: Array<PieChartOptions> = []

    series = this.data.measures.map(({ name }, idx) => {
      const seriesItem = this.$props?.series?.[idx] || {}
      return {
        type: 'pie',
        name,
        radius: this.isDonut ? ['35%', '60%'] : [0, '60%'],
        ...seriesItem
      }
    })

    return series
  }

  chartHandler() {
    // build echarts options
    const option: EChartsCoreOption = {
      tooltip: this.getPieTooltip(),
      dataset: this.getPieDataset(),
      series: this.getPieSeries(),
      ...this.settings
    }

    // console.log(option)
    return option
  }
}

export { PieChartOptions }
