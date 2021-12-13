import * as echarts from 'echarts/core'
import { TreeChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([TreeChart])

export default {
  name: 'VeTreeChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().tree
  }
}
