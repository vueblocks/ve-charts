/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue-demi'

import { VeChart } from './base/index'
import { BarChart } from './bar/index'
import { LineChart } from './line/index'
import { PieChart } from './pie/index'

const componentList = [
  VeChart,
  BarChart,
  LineChart,
  PieChart
]

const install = (app: App): void => {
  componentList.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  VeChart,
  BarChart,
  LineChart,
  PieChart
}
export default install
