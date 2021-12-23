import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeLineChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().line
  }
}
