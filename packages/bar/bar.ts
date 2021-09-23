/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { BarSeriesOption } from 'echarts/charts'

import { VeChartsData, ChartCommonOption } from '../types'

import { getDataset } from '../utils'
import { BASE_OPTION } from '../constant'

// Bar Chart Options
type BarChartOptions = ComposeOption<BarSeriesOption | ChartCommonOption>

type BarVariants = 'column' | 'row'

export interface BarChartSettings extends BarSeriesOption {
  // describe bar direciton
  variant?: BarVariants
}

export default class Bar {
  $props: any
  data: VeChartsData
  settings: BarChartSettings
  chartType: string
  isColumn: boolean

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.chartType = 'bar'
    this.isColumn = this.settings?.variant === 'column'
  }

  // build grid
  getGrid(isColumn: boolean) {
    const columnGrid = {
      right: 30,
      bottom: 10,
      left: 30,
      containLabel: true
    }

    const grid = isColumn ? columnGrid : BASE_OPTION.grid

    return { ...grid, ...this.$props?.grid }
  }

  getBarDimAxis() {
    return {
      type: 'category'
    }
  }

  getBarMeaAxis() {
    return {
      type: 'value'
    }
  }

  getSeries() {
    let series: Array<BarSeriesOption> = []

    series = this.data.measures.map(({ name }, idx) => {
      const seriesItem = this.$props?.series?.[idx] || {}
      return {
        type: this.chartType,
        name,
        ...seriesItem
      }
    })

    return series
  }

  chartHandler() {
    const xAxis = this.isColumn ? this.getBarMeaAxis() : this.getBarDimAxis()

    const yAxis = this.isColumn ? this.getBarDimAxis() : this.getBarMeaAxis()

    // build echarts options
    const option: EChartsCoreOption = {
      grid: this.getGrid(this.isColumn),
      xAxis,
      yAxis,
      dataset: getDataset(this.data),
      series: this.getSeries()
    }

    return option
  }
}

export { BarChartOptions }
