/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, h, PropType, isVue2 } from 'vue-demi'
import cloneDeep from 'lodash.clonedeep'

import '../use/useCommonChart'
import { VeChart } from '../base/index'
// import { isObject } from './utils'
import type { EChartsOption, ECSetOption } from '../types'
import { isEmpty } from '../utils'

export default defineComponent({
  props: {
    /**
     * echarts options
     * ve-charts delegate all echarts options as component props
     * https://echarts.apache.org/zh/option.html
     */
    title: Object as PropType<ECSetOption['title']>,
    legend: Object as PropType<ECSetOption['legend']>,
    grid: Object as PropType<ECSetOption['grid']>,
    xAxis: [Object, Array] as PropType<ECSetOption['xAxis']>,
    yAxis: [Object, Array] as PropType<ECSetOption['yAxis']>,
    polar: Object as PropType<ECSetOption['polar']>,
    radiusAxis: Object as PropType<ECSetOption['radiusAxis']>,
    angleAxis: Object as PropType<ECSetOption['angleAxis']>,
    radar: [Object, Array] as PropType<ECSetOption['radar']>,
    dataZoom: [Object, Array] as PropType<ECSetOption['dataZoom']>,
    visualMap: [Object, Array] as PropType<ECSetOption['visualMap']>,
    tooltip: Object as PropType<ECSetOption['toolbox']>,
    axisPointer: Object as PropType<ECSetOption['axisPointer']>,
    toolbox: Object as PropType<ECSetOption['toolbox']>,
    brush: Object as PropType<ECSetOption['brush']>,
    geo: Object as PropType<ECSetOption['geo']>,
    parallel: Object as PropType<ECSetOption['parallel']>,
    parallelAxis: Array as PropType<ECSetOption['parallelAxis']>,
    singleAxis: Array as PropType<ECSetOption['singleAxis']>,
    timeline: Object as PropType<ECSetOption['timeline']>,
    graphic: Object as PropType<ECSetOption['graphic']>,
    calendar: Object as PropType<ECSetOption['calendar']>,
    dataset: Object as PropType<ECSetOption['dataset']>,
    aria: Object as PropType<ECSetOption['aria']>,
    series: [Object, Array] as PropType<ECSetOption['series']>,
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
      default: () => { return {} }
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
    chartOpts (): any {
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
      // .forEach((prop: string) => (this.$props[prop] === undefined) && delete this.$props[prop])
      .filter((prop: string) => !/data|settings|height|loading|emptyText/.test(prop))
      .forEach((prop: string) => {
        this.$watch(
          prop,
          (val: any) => {
            if (!isEmpty(val)) {
              // merge echarts default option
              const option = prop === 'option'
                ? this.option
                : { [prop]: val }
              this.mergePropsToOption(option)
            }

            this.forcedUpdate()
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
    forcedUpdate () {
      // manual update echarts options
      this.needUpdate = true
      this.$nextTick(() => { this.needUpdate = false })
    }
  },
  render () {
    const attrs = isVue2
      ? { props: this.chartOpts }
      : this.chartOpts
    return h(VeChart, attrs)
  }
})
