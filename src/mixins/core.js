import { cloneDeep, isNull, isEmpty, isUndefined } from 'lodash'

import { getType } from '../utils'
import { color } from '../base-options'
import BaseEcharts from '../components/BaseEcharts'
import EmptyData from '../components/EmptyData'

export default {
  components: {
    BaseEcharts,
    EmptyData
  },
  props: {
    data: { type: [Object, Array], default() { return {} } },
    settings: { type: Object, default() { return {} } },
    // echarts default options
    title: Object,
    legend: Object,
    grid: Object,
    xAxis: Object,
    yAxis: Object,
    dataZoom: [Object, Array],
    visualMap: [Object, Array],
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
    themeName: { type: String, default() { return 'default' } },
    loading: Boolean,
    emptyText: String,
    renderer: { type: String, default: 'canvas' }
  },

  computed: {
    chartColor() {
      return this.color || (this.theme && this.theme.color) || color
    },
    isEmptyData() {
      return isNull(this.data) || isEmpty(this.data) || isUndefined(this.data)
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
      if (!this.chartHandler || this.isEmptyData) return
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible
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
      // init options
      this.initOptions = {
        renderer: this.renderer
      }
      // const themeName = this.themeName || (this.theme ? 'custom-theme' : 've-charts')
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

    addMark (seriesItem, marks) {
      Object.keys(marks).forEach(key => {
        if (marks[key]) {
          seriesItem[key] = marks[key]
        }
      })
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
    this._once = {}
    this.addWatchToProps()
  },

  mounted () {
    this.init()
  }
}
