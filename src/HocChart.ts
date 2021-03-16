/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, h, PropType } from 'vue-demi'
import cloneDeep from 'lodash.clonedeep'

import BaseChart from './BaseChart'
// import { isObject } from './utils'
import type { EChartsOption, ECSetOption } from './types'

export default defineComponent({
  props: {
    /**
     * echarts options
     * ve-charts delegate all echarts options as component props
     * https://echarts.apache.org/zh/option.html
     */
    title: Object as PropType<ECSetOption['title']>,
    legend: Object,
    grid: Object,
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    polar: Object,
    radiusAxis: Object,
    angleAxis: Object,
    radar: [Object, Array],
    dataZoom: [Object, Array],
    visualMap: [Object, Array],
    tooltip: Object,
    axisPointer: Object,
    toolbox: Object,
    brush: Object,
    geo: Object,
    parallel: Object,
    parallelAxis: Array,
    singleAxis: Array,
    timeline: Object,
    graphic: Object,
    calendar: Object,
    dataset: Object,
    aria: Object,
    series: [Object, Array],
    darkMode: { type: [Boolean, String], default: 'auto' },
    color: Array,
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: { type: Boolean, default: true },
    animationThreshold: Number,
    animationDuration: [Number, Function],
    animationEasing: [String, Function],
    animationDelay: [Number, Function],
    animationDurationUpdate: [Number, Function],
    animationEasingUpdate: [String, Function],
    animationDelayUpdate: [String, Function],
    stateAnimation: Object,
    blendMode: String,
    hoverLayerThreshold: Number,
    useUTC: { type: Boolean, default: false },
    options: Object,
    media: Array,
    // ve-charts basic props
    data: [Object, Array],
    settings: [Object, Array],
    loading: { type: Boolean, default: false },
    emptyText: String,
    // ve-charts common props
    option: {
      type: [Object, Array] as PropType<EChartsOption>,
      default: {}
    }
  },
  data: () => ({
    initOptions: {
      renderer: 'canvas'
    },
    needUpdate: false,
    setOptionOpts: {},
    mergedOption: {}
  }),
  computed: {
    baseChartOpts (): any {
      return {
        option: this.mergedOption,
        initOptions: this.initOptions,
        needUpdate: this.needUpdate,
        setOptionOpts: this.setOptionOpts
      }
    }
  },
  created () {
    this.mergedOption = this.option

    Object.keys(this.$props)
      .filter(prop => !/data|setting|height|loading|emptyText/.test(prop))
      .forEach((prop: string) => {
        this.$watch(
          prop,
          (val: any) => {
            // merge echarts default option
            const option = prop === 'option'
              ? this.option
              : { [prop]: val }
            this.mergePropsToOption(option)

            this.manualUpdate()
          },
          {
            // TODO only object types need deep watch
            deep: true,
            immediate: true
          }
        )
      })
  },
  beforeUnmount () {
    this.mergedOption = {}
  },
  methods: {
    mergePropsToOption (props: any) {
      const option = cloneDeep(this.mergedOption)

      this.mergedOption = { ...option, ...props }
    },
    manualUpdate () {
      // manual update echarts options
      this.needUpdate = true
      this.$nextTick(() => { this.needUpdate = false })
    }
  },
  render () {
    // props.$props
    return h(BaseChart, this.baseChartOpts)
  }
})
