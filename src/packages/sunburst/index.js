import * as echarts from 'echarts/core'
import { SunburstChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([SunburstChart])

export default {
  name: 'VeSunburstChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().sunburst
  }
}
