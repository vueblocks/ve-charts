/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { ScatterSeriesOption } from 'echarts/charts'

import { VeChartsData, ChartCommonOption } from '../types'
import { BASE_OPTION } from '../constant'

// Bar Chart Options
type ScatterChartOptions = ComposeOption<
  ScatterSeriesOption | ChartCommonOption
>

type ScatterVariants = 'scatter' | 'bubble'

export interface ScatterChartSettings extends ScatterSeriesOption {
  // describe scatter variants
  variant?: ScatterVariants
  bubble?: Array<ScatterSeriesOption>
}

export default class Scatter {
  $props: any
  data: VeChartsData
  settings: ScatterChartSettings
  chartType: string

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.chartType = 'scatter'
  }

  // build grid
  getLineGrid() {
    const grid = BASE_OPTION.grid

    return { ...grid, ...this.$props?.grid }
  }

  getScatterDataset() {
    const dataset: any = []
    const { measures } = this.data

    if (Array.isArray(measures)) {
      measures.forEach(v => {
        dataset.push({
          source: v.data
        })
      })
    } else {
      return
    }

    return dataset
  }

  getScatterSeries() {
    let series: Array<ScatterSeriesOption> = []

    series = this.data.measures.map(({ name }, idx) => {
      // default measure data
      const measureItem = {
        type: this.chartType,
        name,
        datasetIndex: idx
      }

      // merge series defined from component
      const seriesItem = this.$props?.series?.[idx] || {}

      // merge bubble variant settings
      const bubbleSettings =
        this.settings?.variant === 'bubble' ? this.settings?.bubble?.[idx] : ''

      return {
        ...measureItem,
        ...bubbleSettings,
        ...seriesItem
      }
    })

    return series
  }

  chartHandler() {
    // build echarts options
    const option: EChartsCoreOption = {
      grid: this.getLineGrid(),
      dataset: this.getScatterDataset(),
      series: this.getScatterSeries()
    }

    return option
  }
}

export { ScatterChartOptions }
