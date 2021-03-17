import { createApp } from 'vue'
import App from './App.vue'

import { VeBarChart, VeLineChart } from 've-charts'

const app = createApp(App)

app.component(VeBarChart.name, VeBarChart)
app.component(VeLineChart.name, VeLineChart)

app.mount('#app')
