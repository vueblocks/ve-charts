import 'echarts/lib/chart/bar'

import HocEcharts from '../../components/HocEcharts.vue'
import BarChart from './chart'

export default {
  name: 'VeBarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new BarChart().bar
  }
}
