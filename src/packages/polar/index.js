import * as echarts from 'echarts/core'

import {
  LineChart,
  BarChart
} from 'echarts/charts'

import {
  PolarComponent
} from 'echarts/components'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([
  LineChart,
  BarChart,
  PolarComponent
])

export default {
  name: 'VePolarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().polar
  }
}
