import { defineComponent, h } from 'vue-demi'
import BaseChart from './BaseChart'

export default defineComponent({
  components: {
    BaseChart
  },
  props: {
    // data: { type: [Object, Array], default () { return {} } },
    // settings: { type: [Object, Array], default () { return {} } },
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
    aria: Object,
    series: [Object, Array],
    darkmode: Boolean,
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
    stateAnimation: Object,
    blendMode: String,
    hoverLayerThreshold: Number,
    useUTC: { type: Boolean, default: false },
    options: Object,
    media: Array,
    // ve-charts props
    theme: { type: [String, Object], default: '' },
    loading: { type: Boolean, default: false },
    emptyText: String,
    renderer: { type: String, default: 'canvas' },
    height: { type: Number, default: 400 }
  },
  data: () => ({
    initOptions: {
      renderer: 'canvas'
    }
  }),
  render () {
    return h(BaseChart, {})
  }
})
