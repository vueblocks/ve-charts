import * as echarts from 'echarts/core'
import { TreemapChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([TreemapChart])

export default {
  name: 'VeTreemapChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().treemap
  }
}
