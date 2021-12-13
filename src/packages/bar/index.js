import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([BarChart])

export default {
  name: 'VeBarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().bar
  }
}
