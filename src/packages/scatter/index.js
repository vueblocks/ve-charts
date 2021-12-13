import * as echarts from 'echarts/core'
import { ScatterChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([ScatterChart])

export default {
  name: 'VeScatterChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().scatter
  }
}
