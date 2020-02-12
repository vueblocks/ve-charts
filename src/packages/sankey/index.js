import 'echarts/lib/chart/sankey'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeSankeyChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().sankey
  }
}
