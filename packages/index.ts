/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue'

import { VeChart } from './base/index'
import { BarChart, VeBarChart } from './bar/index'
import { LineChart, VeLineChart } from './line/index'
import { PieChart, VePieChart } from './pie/index'
import { FunnelChart } from './funnel/index'
import { GaugeChart } from './gauge/index'
import { RadarChart, VeRadarChart } from './radar/index'
import { ScatterChart, VeScatterChart } from './scatter/index'
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
  TreemapChart,
  VeBarChart,
  VeLineChart,
  VePieChart,
  VeScatterChart,
  VeRadarChart
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
  TreemapChart,
  VeBarChart,
  VeLineChart,
  VePieChart,
  VeScatterChart,
  VeRadarChart
}

export default install
