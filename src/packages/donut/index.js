import 'echarts/lib/chart/pie'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from '../pie/chart'

const chart = new Chart()

export default {
  name: 'VeDonutChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = chart.donut
  }
}
