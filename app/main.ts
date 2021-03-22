import { createApp } from 'vue'
import App from './App.vue'

// import VeCharts from '../packages/index'
// import { BarChart, LineChart } from '../packages/index'
import BarChart from '../packages/bar/index'
import LineChart from '../packages/line/index'
import PieChart from '../packages/pie/index'

const app = createApp(App)

// app.use(VeCharts)
app.use(BarChart)
app.use(PieChart)
// app.component(BarChart.name, BarChart)
app.component(LineChart.name, LineChart)
// app.use(LineChart)

app.mount('#app')
