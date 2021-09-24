/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { RadarSeriesOption } from 'echarts/charts'
import { RadarOption, PolarOption, GridOption } from 'echarts/types/dist/shared'

import { VeChartsData, ChartCommonOption } from '../types'
import { BASE_OPTION } from '../constant'

// Bar Chart Options
type RadarChartOptions = ComposeOption<RadarSeriesOption | ChartCommonOption>

type RadarVariants = 'radar' | 'polar'

export interface RadarChartSettings extends RadarSeriesOption {
  // describe scatter variants
  variant?: RadarVariants
  radar?: RadarOption
  polar?: PolarOption
}

export default class Radar {
  $props: any
  data: VeChartsData
  settings: RadarChartSettings
  chartType: string

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.chartType = 'radar'
  }

  // build grid
  getGrid(): GridOption {
    const grid = BASE_OPTION.grid

    return { ...grid, ...this.$props?.grid }
  }

  getRadarRadar(): RadarOption {
    return {
      center: ['50%', '50%'],
      radius: '60%',
      splitNumber: 5,
      shape: 'polygon',
      indicator: this.data.dimensions as RadarOption['indicator'],
      ...this.settings?.radar
    }
  }

  getRadarSeries() {
    let series: Array<RadarSeriesOption> = []

    series = this.data.measures.map(({ name, data }, idx) => {
      // default measure data
      const measureItem = {
        type: this.chartType,
        name,
        data: [
          {
            name,
            value: data
          }
        ]
      }

      // merge series defined from component
      const seriesItem = this.$props?.series?.[idx] || {}

      return {
        ...measureItem,
        ...seriesItem
      }
    })

    return series
  }

  chartHandler() {
    // build echarts options
    const option: EChartsCoreOption = {
      // grid: this.getGrid(),
      radar: this.getRadarRadar(),
      series: this.getRadarSeries()
    }

    return option
  }
}

export { RadarChartOptions }
