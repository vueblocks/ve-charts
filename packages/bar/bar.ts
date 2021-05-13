/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { BarSeriesOption } from 'echarts/charts'
import {
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption
} from 'echarts/components'
import { VeChartsData } from '../types'

import { getDataset } from '../utils'
import { BASE_OPTION } from '../constant'

// Bar Chart Options
type BarChartOptions = ComposeOption<
  BarSeriesOption | GridComponentOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption
>

export interface BarChartSettings {
  // describe bar direciton
  direction?: string;
}

export default class Bar {
  $props: any;
  data: VeChartsData;
  settings: BarChartSettings;
  isColumn: boolean;

  constructor (props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.isColumn = this.settings?.direction === 'column'
  }

  // build grid
  getBarGrid (isColumn: boolean) {
    const columnGrid = {
      right: 30,
      bottom: 10,
      left: 30,
      containLabel: true
    }

    const grid = isColumn ? columnGrid : BASE_OPTION.grid

    return { ...grid, ...this.$props?.grid }
  }

  getLegend () {
    const legend: LegendComponentOption = this.$props.legend || {}
    legend.data = this.data.measures.map(item => item.name)

    return legend
  }

  getBarDimAxis () {
    return {
      type: 'category'
    }
  }

  getBarMeaAxis () {
    return {}
  }

  getSeries () {
    let series: Array<BarSeriesOption> = []

    series = this.data.measures.map(({ name }, idx) => {
      const seriesItem = this.$props?.series?.[idx] || {}
      return {
        type: 'bar',
        name,
        ...seriesItem
      }
    })

    return series
  }

  chartHandler () {
    const xAxis = this.isColumn ? this.getBarMeaAxis() : this.getBarDimAxis()

    const yAxis = this.isColumn ? this.getBarDimAxis() : this.getBarMeaAxis()

    // build echarts options
    const option: EChartsCoreOption = {
      grid: this.getBarGrid(this.isColumn),
      legend: this.getLegend(),
      tooltip: {},
      xAxis,
      yAxis,
      dataset: getDataset(this.data),
      series: this.getSeries()
    }

    // console.log(option)
    return option
  }
}

export { BarChartOptions }
