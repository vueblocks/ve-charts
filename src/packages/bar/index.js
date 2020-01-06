import 'echarts/lib/chart/bar'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeBarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().bar
  }
}
