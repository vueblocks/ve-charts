import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([GaugeChart])

export default {
  name: 'VeGaugeChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().gauge
  }
}
