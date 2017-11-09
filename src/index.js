import VeBar from './packages/bar'
import VeDonut from './packages/donut'
import VeGauge from './packages/gauge'
// import VeGeo from './packages/geo'
import VeLine from './packages/line'
import VePie from './packages/pie'
import VeRadar from './packages/radar'
import VeScatter from './packages/scatter'
import VeStrip from './packages/strip'
import VeTreemap from './packages/treemap'

const components = [
  VeBar,
  VeDonut,
  VeGauge,
  // VeGeo,
  VeLine,
  VePie,
  VeRadar,
  VeScatter,
  VeStrip,
  VeTreemap
]

function install(Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  VeBar,
  VeDonut,
  VeGauge,
  // VeGeo,
  VeLine,
  VePie,
  VeRadar,
  VeScatter,
  VeStrip,
  VeTreemap,
  install
}
