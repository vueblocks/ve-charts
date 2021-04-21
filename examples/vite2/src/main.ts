import { createApp } from 'vue'
import App from './App.vue'

import { BarChart, LineChart } from 've-charts'

const app = createApp(App)

app.use(BarChart)
app.component(LineChart.name, LineChart)

app.mount('#app')
