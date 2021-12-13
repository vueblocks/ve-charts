import * as echarts from 'echarts/core'
import {
  MapChart,
  ScatterChart,
  EffectScatterChart,
  HeatmapChart,
  LinesChart
} from 'echarts/charts'

import {
  VisualMapComponent,
  GeoComponent
} from 'echarts/components'

import HocEcharts from '../../components/HocEcharts.vue'
import Chart from './chart'

echarts.use([
  MapChart,
  ScatterChart,
  EffectScatterChart,
  HeatmapChart,
  LinesChart,
  VisualMapComponent,
  GeoComponent
])

export default {
  name: 'VeGeoChart',
  mixins: [HocEcharts],
  created () {
    this.chartHandler = new Chart().geo
  }
}
