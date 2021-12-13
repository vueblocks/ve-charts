import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([LineChart])

export default {
  name: 'VeLineChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().line
  }
}
