import { createApp } from 'vue'
import App from './App.vue'

import VeCharts from '../src/index'

const app = createApp(App)

app.use(VeCharts)

app.mount('#app')
