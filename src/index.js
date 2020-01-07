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
import VeSunburstChart from './packages/sunburst'
import VeTreeChart from './packages/tree'
import VeWordcloudChart from './packages/wordcloud'
import VeLiquidfillChart from './packages/liquidfill'
import VePolarChart from './packages/polar'

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
  VeTreemapChart,
  VeSunburstChart,
  VeTreeChart,
  VeWordcloudChart,
  VeLiquidfillChart,
  VePolarChart
]

const install = Vue => {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

export default {
  install,
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
  VeSunburstChart,
  VeTreeChart,
  VeWordcloudChart,
  VeLiquidfillChart,
  VePolarChart
}
