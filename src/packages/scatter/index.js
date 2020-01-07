import 'echarts/lib/chart/scatter'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeScatterChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().scatter
  }
}
