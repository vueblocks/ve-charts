import { App } from 'vue-demi'
import BarChart from './packages/bar/index'
import LineChart from './packages/line/index'

export const install = (app: App): void => {
  app.component(BarChart.name, BarChart)
  app.component(LineChart.name, LineChart)
}

export { BarChart, LineChart }

export default install
