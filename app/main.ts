import { createApp } from 'vue'
import App from './App.vue'

// import VeCharts from '../packages/index'
// import { BarChart, LineChart } from '../packages/index'
import BarChart from '../packages/bar/index'
import LineChart from '../packages/line/index'
import PieChart from '../packages/pie/index'
import FunnelChart from '../packages/funnel/index'
import GaugeChart from '../packages/gauge/index'

console.log(GaugeChart)

const app = createApp(App)

// app.use(VeCharts)
app.use(BarChart)
app.use(PieChart)
app.use(FunnelChart)
app.use(GaugeChart)
// app.component(BarChart.name, BarChart)
app.component(LineChart.name, LineChart)
// app.use(LineChart)

app.mount('#app')
