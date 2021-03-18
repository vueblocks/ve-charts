import { App } from 'vue-demi'

import VeBarChart from './chart'

const install = (app: App): void => {
  app.component(VeBarChart.name, VeBarChart)
}

export { VeBarChart }
export default install
