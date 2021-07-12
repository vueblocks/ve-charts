import { cloneDeep, isNull, isEmpty, isUndefined, get, merge } from 'lodash-es'

import { getType } from '../utils'
import { color } from '../base-options'
import BaseEcharts from '../components/BaseEcharts.vue'
import EmptyData from '../components/EmptyData.vue'
import LoadingChart from '../components/LoadingChart.vue'

export default {
  components: {
    BaseEcharts,
    EmptyData,
    LoadingChart
  },
  props: {
    data: { type: [Object, Array], default () { return {} } },
    settings: { type: [Object, Array], default () { return {} } },
    // echarts default options
    title: Object,
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
    series: [Object, Array],
    color: Array,
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    animationThreshold: Number,
    animationDuration: [Number, Function],
    animationEasing: [String, Function],
    animationDelay: [Number, Function],
    animationDurationUpdate: [Number, Function],
    animationEasingUpdate: [String, Function],
    animationDelayUpdate: [String, Function],
    blendMode: String,
    hoverLayerThreshold: Number,
    useUTC: { type: Boolean, default: false },
    // ve-charts custom props
    tooltipVisible: { type: Boolean, default: true },
    legendVisible: { type: Boolean, default: true },
    tickMarkVisible: { type: Boolean, default: false }, // 雷达图是否显示刻度
    legendPosition: String,
    theme: [String, Object],
    loading: { type: Boolean, default: false },
    emptyText: String,
    renderer: { type: String, default: 'canvas' },
    height: { type: Number, default: 400 },
    seriesOption: { type: Object, default () { return {} } }
  },
  data () {
    return {
      // echarts instance
      ec: null,
      initOptions: null
    }
  },
  computed: {
    chartColor () {
      return this.theme ? this.color : (this.color || color)
    },
    isEmptyData () {
      if (isNull(this.data) || isEmpty(this.data) || isUndefined(this.data)) {
        return true
      } else {
        if (Array.isArray(this.data)) {
          return false
        } else {
          const measures = get(this.data, 'measures')
          return measures.length === 0
        }
      }
    },
    isEmptySeries () {
      return isNull(this.series) || isEmpty(this.series) || isUndefined(this.series)
    },
    isHasData () {
      return !this.isEmptyData || !this.isEmptySeries
    },
    isHasParentStyle () {
      return this.loading || (this.isEmptyData && this.isEmptySeries)
    },
    parentStyle () {
      const parentStyle = this.isHasParentStyle
        ? { position: 'relative', height: `${this.height}px` }
        : {}
      return parentStyle
    }
  },
  watch: {
    data: {
      deep: true,
      handler (v) {
        if (v) { this.dataHandler(v) }
      }
    },
    settings: {
      deep: true,
      handler (v) {
        this.dataHandler(this.data)
      }
    },
    ec (val) {
      this.$emit('update:ec', val)
    }
  },
  methods: {
    dataHandler (data) {
      if (!this.chartHandler || (this.isEmptyData && this.isEmptySeries)) return
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        isEmptyData: this.isEmptyData,
        isEmptySeries: this.isEmptySeries,
        tickMarkVisible: this.tickMarkVisible,
        _once: this._once
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      const options = this.chartHandler(data, cloneDeep(this.settings), extra)

      if (options) {
        if (typeof options.then === 'function') {
          options.then(this.optionsHandler)
        } else {
          this.optionsHandler(options)
        }
      }
    },
    optionsHandler (options) {
      options.color = this.chartColor
      // handle legend
      if (this.legendPosition && options.legend) {
        const position = this.legendPosition.split('-').shift()
        options.legend.left = this.legendPosition.split('-').pop()
        if (['top'].indexOf(position) !== -1) options.legend.top = 0
        if (['bottom'].indexOf(position) !== -1) options.legend.bottom = 0
      }
      const echartsSettings = [
        'title', 'legend', 'grid', 'xAxis', 'yAxis', 'polar', 'radiusAxis', 'angleAxis',
        'radar', 'dataZoom', 'visualMap', 'tooltip', 'axisPointer', 'toolbox', 'brush',
        'geo', 'parallel', 'parallelAxis', 'singleAxis', 'timeline', 'graphic', 'calendar',
        'dataset', 'series', 'color', 'backgroundColor', 'textStyle', 'animation',
        'animationThreshold', 'animationDuration', 'animationEasing', 'animationDelay',
        'animationDurationUpdate', 'animationEasingUpdate', 'animationDelayUpdate', 'blendMode',
        'hoverLayerThreshold', 'useUTC'
      ]
      echartsSettings.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      if (this.animation) {
        Object.keys(this.animation).forEach(key => {
          options[key] = this.animation[key]
        })
      }
      options.series = this.seriesHandler(options.series)
      // Merge options
      this.options = Object.assign(cloneDeep(this.options), options)
    },
    seriesHandler (series) {
      // 当 series 系列为空数组
      if (Array.isArray(series) && series.length === 0) return []

      // 当 series 为对象时，初始化为数组
      if (!(series instanceof Array)) return [series]

      // 当未配置 seriesOption 系列配置时
      if (Object.keys(this.seriesOption).length === 0) return series

      // 生成 series
      for (const [key, opt] of Object.entries(this.seriesOption)) {
        const _idx = series.findIndex(v => v.name === key)
        if (_idx > -1) { // 存在series时，合并配置项
          merge(series[_idx], opt)
        } else if (opt.type) { // 不存在series时，如果包含type，新建系列
          series[series.length] = opt
        }
      }
      return series
    },
    init () {
      if (this.data) this.dataHandler(this.data)
    },
    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop)) {
          const opts = {}
          if (getType(prop) === '[object Object]') {
            opts.deep = true
          }
          this.$watch(prop, () => {
            this.dataHandler(this.data)
          }, opts)
        }
      })
    }
  },
  created () {
    // init options
    this.initOptions = {
      renderer: this.renderer
    }
    this._once = {}
    this.addWatchToProps()
  },
  mounted () {
    this.init()
  }
}
