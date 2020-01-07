import 'echarts/lib/chart/treemap'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeTreemapChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().treemap
  }
}
