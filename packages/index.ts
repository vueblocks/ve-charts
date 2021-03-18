/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue-demi'

import { VeChart } from './base/index'
import { VeBarChart } from './bar/index'
import { VeLineChart } from './line/index'

const componentList = [
  VeChart,
  VeBarChart,
  VeLineChart
]

const install = (app: App): void => {
  componentList.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  VeChart,
  VeBarChart,
  VeLineChart
}
export default install
