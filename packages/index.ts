import { App } from 'vue-demi'

import VeChart from './base/index'
import VeBarChart from './bar/index'
import VeLineChart from './line/index'

const install = (app: App): void => {
  app.component(VeChart.name, VeChart)
  app.component(VeBarChart.name, VeBarChart)
  app.component(VeLineChart.name, VeLineChart)
}

export {
  VeChart,
  VeBarChart,
  VeLineChart,
  install
}

export default install
