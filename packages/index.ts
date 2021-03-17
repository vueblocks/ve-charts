import { App } from 'vue-demi'

import VeChart from './base/index'
import BarChart from './bar/index'
import LineChart from './line/index'

const install = (app: App): void => {
  app.component(VeChart.name, VeChart)
  app.component(BarChart.name, BarChart)
  app.component(LineChart.name, LineChart)
}

export {
  VeChart,
  BarChart,
  LineChart,
  install
}

export default install
