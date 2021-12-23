import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VePieChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().pie
  }
}
