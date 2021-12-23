import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeRadarChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().radar
  }
}
