import { App } from 'vue'
// import VeCharts from '../../packages/index'
// import { BarChart, LineChart } from '../../packages/index'
import VeChart from '../../packages/base/index'
import { BarChart, VeBarChart } from '../../packages/bar/index'
import { LineChart, VeLineChart } from '../../packages/line/index'
import { PieChart, VePieChart } from '../../packages/pie/index'
import FunnelChart from '../../packages/funnel/index'
import GaugeChart from '../../packages/gauge/index'
import RadarChart from '../../packages/radar/index'
import ScatterChart from '../../packages/scatter/index'
import TreeChart from '../../packages/tree/index'
import TreemapChart from '../../packages/treemap/index'

export default {
  install: (app: App) => {
    // app.use(VeCharts)
    app.use(VeChart)
    app.use(BarChart)
    app.use(PieChart)
    app.use(FunnelChart)
    app.use(GaugeChart)
    app.use(RadarChart)
    app.use(ScatterChart)
    app.use(TreeChart)
    app.use(TreemapChart)
    app.component(LineChart.name, LineChart)
    // VeCharts
    app.use(VeBarChart)
    app.use(VePieChart)
    app.use(VeLineChart)
    // app.use(LineChart)
  }
}
