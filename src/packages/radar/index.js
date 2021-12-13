import * as echarts from 'echarts/core'
import { RadarChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([RadarChart])

export default {
  name: 'VeRadarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().radar
  }
}
