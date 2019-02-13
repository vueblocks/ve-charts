import VeBarChart from './packages/bar'
import VeDonutChart from './packages/donut'
import VeFunnelChart from './packages/funnel'
import VeGaugeChart from './packages/gauge'
// import VeGeoChart from './packages/geo'
import VeLineChart from './packages/line'
import VePieChart from './packages/pie'
import VeRadarChart from './packages/radar'
import VeScatterChart from './packages/scatter'
import VeTreemapChart from './packages/treemap'
import VeSunburstChart from './packages/sunburst'
import VeTreeChart from './packages/tree'
import VeWordcloudChart from './packages/wordcloud'

const components = [
  VeBarChart,
  VeDonutChart,
  VeFunnelChart,
  VeGaugeChart,
  // VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeTreemapChart,
  VeSunburstChart,
  VeTreeChart,
  VeWordcloudChart
]

function install(Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  VeBarChart,
  VeDonutChart,
  VeFunnelChart,
  VeGaugeChart,
  // VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeTreemapChart,
  VeSunburstChart,
  VeTreeChart,
  VeWordcloudChart
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
