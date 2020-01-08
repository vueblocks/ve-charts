import 'echarts-wordcloud/dist/echarts-wordcloud.min'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeWordcloudChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().wordcloud
  }
}
