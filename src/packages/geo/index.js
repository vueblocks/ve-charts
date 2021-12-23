import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

export default {
  name: 'VeGeoChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().geo
  }
}
