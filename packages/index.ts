/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue-demi'

import { VeChart } from './base/index'
import { BarChart } from './bar/index'
import { LineChart } from './line/index'
import { PieChart } from './pie/index'
import { FunnelChart } from './funnel/index'
import { GaugeChart } from './gauge/index'
import { RadarChart } from './radar/index'
import { ScatterChart } from './scatter/index'
import { TreeChart } from './tree/index'
import { TreemapChart } from './treemap/index'

const componentList = [
  VeChart,
  BarChart,
  LineChart,
  PieChart,
  FunnelChart,
  GaugeChart,
  RadarChart,
  ScatterChart,
  TreeChart,
  TreemapChart
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
  PieChart,
  FunnelChart,
  GaugeChart,
  RadarChart,
  ScatterChart,
  TreeChart,
  TreemapChart
}

export default install
