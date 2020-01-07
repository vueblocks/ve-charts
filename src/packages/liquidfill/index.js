import 'echarts-liquidfill/dist/echarts-liquidfill.min'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeLiquidfillChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().liquidfill
  }
}
