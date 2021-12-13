import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([PieChart])

export default {
  name: 'VePieChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().pie
  }
}
