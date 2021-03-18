import { App } from 'vue-demi'

import VeChart from './chart'

const install = (app: App): void => {
  app.component(VeChart.name, VeChart)
}

export { VeChart }
export default install
