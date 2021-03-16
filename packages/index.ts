import { App } from 'vue-demi'

import VeChart from './base/index'
import BarChart from './bar/index'
import LineChart from './line/index'

export const install = (app: App): void => {
  app.component(VeChart.name, VeChart)
  app.component(BarChart.name, BarChart)
  app.component(LineChart.name, LineChart)
}

export { BarChart, LineChart }

export default install
