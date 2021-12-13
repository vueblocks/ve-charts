import * as echarts from 'echarts/core'
import { SankeyChart } from 'echarts/charts'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([SankeyChart])

export default {
  name: 'VeSankeyChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().sankey
  }
}
