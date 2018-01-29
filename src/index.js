import VeBarChart from './packages/bar'
import VeDonutChart from './packages/donut'
import VeFunnelChart from './packages/funnel'
import VeGaugeChart from './packages/gauge'
import VeGeoChart from './packages/geo'
import VeLineChart from './packages/line'
import VePieChart from './packages/pie'
import VeRadarChart from './packages/radar'
import VeScatterChart from './packages/scatter'
import VeTreemapChart from './packages/treemap'

const components = [
  VeBarChart,
  VeDonutChart,
  VeFunnelChart,
  VeGaugeChart,
  VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeTreemapChart
]

function install(Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  VeBarChart,
  VeDonutChart,
  VeFunnelChart,
  VeGaugeChart,
  VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeTreemapChart,
  install
}
