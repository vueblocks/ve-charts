import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/polar'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VePolarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().polar
  }
}
