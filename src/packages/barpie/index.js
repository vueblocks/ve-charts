import 'echarts/lib/chart/bar'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeBarpieChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().bar
  }
}
