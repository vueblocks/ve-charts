import { cloneDeep, isNull, isEmpty, isUndefined } from 'lodash'

import { getType } from '../utils'
import { color } from '../base-options'
import BaseEcharts from '../components/BaseEcharts'
import EmptyData from '../components/EmptyData'
import LoadingChart from '../components/LoadingChart'

export default {
  components: {
    BaseEcharts,
    EmptyData,
    LoadingChart
  },
  props: {
    data: { type: [Object, Array], default() { return {} } },
    settings: { type: [Object, Array], default() { return {} } },
    // echarts default options
    title: Object,
    legend: Object,
    grid: Object,
    xAxis: Object,
    yAxis: Object,
    radar: [Object, Array],
    dataZoom: [Object, Array],
    visualMap:[Object, Array],
    tooltip: Object,
    axisPointer: Object,
    toolbox: Object,
    brush: Object,
    geo: Object,
    timeline: Object,
    graphic: Object,
    series: [Object, Array],
    color: Array,
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    // ve-charts custom props
    beforeConfig: Function,
    afterConfig: Function,
    afterSetOption: Function,
    afterSetOptionOnce: Function,
    tooltipVisible: { type: Boolean, default: true },
    legendVisible: { type: Boolean, default: true },
    legendPosition: String,
    theme: Object,
    loading: { type: Boolean, default: false },
    emptyText: String,
    renderer: { type: String, default: 'canvas' },
    height: { type: Number, default: 400 }
  },
  data () {
    return {
      baseEcharts: null,
      initOptions: null
    }
  },
  computed: {
    chartColor () {
      return this.theme ? this.color : (this.color || color)
    },
    isEmptyData () {
      return isNull(this.data) || isEmpty(this.data) || isUndefined(this.data)
    },
    isEmptySeries () {
      return isNull(this.series) || isEmpty(this.series) || isUndefined(this.series)
    },
    isHasParentStyle () {
      return this.loading || (this.isEmptyData && this.isEmptySeries)
    },
    parentStyle () {
      const parentStyle = this.isHasParentStyle
        ? { position: 'relative', height: `${this.height}px` }
        : {}
      return parentStyle
    },
    // 使用v-on指令动态绑定Echarts事件对象到组件上
    delegateEvents () {
      const events = {}
      this.registeredEvents.forEach(event => {
        Object.assign(events, {
          [event]: this[event]
        })
      })
      return events
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
    }
  },
  methods: {
    dataHandler (data) {
      if (!this.chartHandler || (this.isEmptyData && this.isEmptySeries)) return
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        isEmptyData: this.isEmptyData
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      const options =  this.chartHandler(data, cloneDeep(this.settings), extra)

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
        'grid', 'dataZoom', 'visualMap', 'toolbox', 'title', 'legend',
        'xAxis', 'yAxis', 'radar', 'tooltip', 'axisPointer', 'brush',
        'geo', 'timeline', 'graphic', 'series', 'backgroundColor',
        'textStyle'
      ]
      echartsSettings.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      if (this.animation) {
        Object.keys(this.animation).forEach(key => {
          options[key] = this.animation[key]
        })
      }
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = options.series
        if (getType(series) === '[object Array]') {
          series.forEach(item => {
            this.addMark(item, marks)
          })
        } else if (getType(series) === '[object Object]') {
          this.addMark(series, marks)
        }
      }
      if (this.afterConfig) options = this.afterConfig(options)
      // if (this.afterSetOption) this.afterSetOption(this.echarts)
      // if (this.afterSetOptionOnce && !this._once['afterSetOptionOnce']) {
      //   this._once['afterSetOptionOnce'] = this.afterSetOptionOnce(this.echarts)
      // }
      // Merge options
      this.options = Object.assign(cloneDeep(this.options), options)
    },
    init () {
      if (this.data) this.dataHandler(this.data)
    },
    addMark(seriesItem, marks) {
      Object.keys(marks).forEach(key => {
        if (marks[key]) {
          seriesItem[key] = marks[key]
        }
      })
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
    },
    /**
     * 添加用户自定义事件代理
     */
    addEventDelegate () {
      const keys = Object.keys(this._events || {})
      keys.length && keys.forEach(ev => {
        if (this.registeredEvents.indexOf(ev) === -1) {
          this.registeredEvents.push(ev)
          if (ev in this._events) {
            this[ev] = this._events[ev]
          }
        }
      })
    }
  },
  created () {
    // init options
    this.initOptions = {
      renderer: this.renderer
    }
    // this._once = {}
    this.registeredEvents = []
    this.addWatchToProps()
    this.addEventDelegate()
  },
  mounted () {
    this.init()
  }
}
