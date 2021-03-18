import { App } from 'vue-demi'

import VeLineChart from './chart'

const install = (app: App): void => {
  app.component(VeLineChart.name, VeLineChart)
}

export { VeLineChart }
export default install
