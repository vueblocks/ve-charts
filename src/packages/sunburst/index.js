import 'echarts/lib/chart/sunburst'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeSunburstChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().sunburst
  }
}
