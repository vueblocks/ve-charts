import * as echarts from 'echarts/core'
import { FunnelChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([FunnelChart])

export default {
  name: 'VeFunnelChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().funnel
  }
}
