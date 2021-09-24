/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposeOption, EChartsCoreOption } from 'echarts/core'
import { FunnelSeriesOption } from 'echarts/charts'
import { max } from 'lodash-es'

import { VeChartsData, ChartCommonOption, AnyRecord } from '../types'
import { getDataset } from '../utils'

// Bar Chart Options
type FunnelChartOptions = ComposeOption<FunnelSeriesOption | ChartCommonOption>

type FunnelVariants = 'contrast' | 'symmetric'

export interface FunnelChartSettings extends FunnelSeriesOption {
  // describe scatter variants
  variant?: FunnelVariants
}

export default class Funnel {
  $props: any
  data: VeChartsData
  settings: FunnelChartSettings
  chartType: string
  isContrast: boolean
  isSymmetric: boolean

  constructor(props: any) {
    this.$props = props
    this.data = this.$props.data
    this.settings = this.$props.settings

    // state
    this.chartType = 'funnel'
    this.isContrast = this.settings?.variant === 'contrast'
    this.isSymmetric = this.settings?.variant === 'symmetric'
  }

  getFunnelSeries() {
    let series: Array<FunnelSeriesOption> = []
    const dimName = Array.isArray(this.data.dimensions)
      ? ''
      : this.data.dimensions?.name

    const maxValue = max(
      this.data.measures.map(item => {
        return Array.isArray(item.data) ? max(item.data) : Number(item.data)
      })
    ) as number

    console.log(maxValue)

    const getEncode = (dimName: string, meaName: string) => {
      return {
        itemName: dimName,
        value: meaName
      }
    }

    const getLeft = (idx: number) => {
      return this.isSymmetric ? (idx === 0 ? '20%' : '50%') : '20%'
    }

    const getAlign = (idx: number) => {
      return this.isSymmetric
        ? idx === 0
          ? 'right'
          : 'left'
        : this.settings?.funnelAlign || 'center'
    }

    const getLabel = (idx: number) => {
      const labelPosition = this.settings?.label?.position || 'outside'
      let label: AnyRecord = {}
      label.position = labelPosition

      if (this.isContrast) {
        const contrastLabel = {
          position: 'inside',
          formatter: (params: any) => {
            const [, , mea2] = params.value
            return `${Math.round((mea2 / maxValue) * 100)}%`
          },
          emphasis: {
            position: 'inside',
            formatter: (params: any) => {
              const [dimName, , mea2] = params.value
              return `${dimName} ${Math.round((mea2 / maxValue) * 100)}%`
            }
          }
        }

        label = idx === 0 ? label : contrastLabel
      }

      if (this.isSymmetric) {
        const rightLabel = {
          position: labelPosition !== 'outside' ? labelPosition : 'left'
        }

        const leftLabel = {
          position: labelPosition !== 'outside' ? labelPosition : 'right'
        }
        label = idx === 0 ? rightLabel : leftLabel
      }

      return label
    }

    series = this.data.measures.map(({ name }, idx) => {
      // default measure data
      const measureItem = {
        type: this.chartType,
        name,
        funnelAlign: getAlign(idx),
        width: this.isSymmetric ? '30%' : '60%',
        left: getLeft(idx),
        label: getLabel(idx),
        encode: getEncode(dimName, name),
        ...this.settings
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
      dataset: getDataset(this.data),
      series: this.getFunnelSeries()
    }

    return option
  }
}

export { FunnelChartOptions }
