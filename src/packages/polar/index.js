import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VePolarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().polar
  }
}
