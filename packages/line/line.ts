/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { LineSeriesOption } from 'echarts/charts'
import { VeChartsData, ChartCommonOption } from '../types'

import { getDataset } from '../utils'
import { BASE_OPTION } from '../constant'

// Bar Chart Options
type LineChartOptions = ComposeOption<LineSeriesOption | ChartCommonOption>

type LineVariants = 'area' | 'stack' | 'step'

export interface LineChartSettings extends LineSeriesOption {
  // describe bar direciton
  variant?: LineVariants
}

export default class Line {
  $props: any
  data: VeChartsData
  settings: LineChartSettings
  chartType: string

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.chartType = 'line'
  }

  // build grid
  getLineGrid() {
    const grid = BASE_OPTION.grid

    return { ...grid, ...this.$props?.grid }
  }

  getLineDimAxis() {
    return {
      type: 'category'
    }
  }

  getLineMeaAxis() {
    return {
      type: 'value'
    }
  }

  getSeries() {
    let series: Array<LineSeriesOption> = []

    series = this.data.measures.map(({ name }, idx) => {
      const seriesItem = this.$props?.series?.[idx] || {}
      return {
        type: this.chartType,
        name,
        step: this.settings?.step || false,
        smooth: this.settings?.smooth || false,
        ...seriesItem
      }
    })

    return series
  }

  chartHandler() {
    const xAxis = this.getLineDimAxis()

    const yAxis = this.getLineMeaAxis()

    // build echarts options
    const option: EChartsCoreOption = {
      grid: this.getLineGrid(),
      xAxis,
      yAxis,
      dataset: getDataset(this.data),
      series: this.getSeries(),
      ...this.settings
    }

    return option
  }
}

export { LineChartOptions }
