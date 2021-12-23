import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeFunnelChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().funnel
  }
}
