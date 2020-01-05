import 'echarts/lib/chart/pie'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from '../pie/chart'

export default {
  name: 'VeDonutChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().donut
  }
}
