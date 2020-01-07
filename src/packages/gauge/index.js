import 'echarts/lib/chart/gauge'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeGaugeChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().gauge
  }
}
