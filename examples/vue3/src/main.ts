import { createApp } from 'vue'
import App from './App.vue'
import VeCharts from 've-charts'

const app = createApp(App)

app.use(VeCharts)

app.mount('#app')
