import { createApp } from 'vue'
import App from './App.vue'

// import VeCharts from '../packages/index'
import { VeBarChart, VeLineChart } from '../packages/index'
// import VeBarChart from '../packages/bar/index'
// import { VeLineChart } from '../packages/line/index'

const app = createApp(App)

// app.use(VeCharts)
// app.use(VeBarChart)
app.component(VeBarChart.name, VeBarChart)
app.component(VeLineChart.name, VeLineChart)
// app.use(VeLineChart)

app.mount('#app')
