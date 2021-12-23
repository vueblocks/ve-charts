import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeTreeChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().tree
  }
}
