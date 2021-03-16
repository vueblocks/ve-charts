import { createApp } from 'vue'
import App from './App.vue'

import VeCharts from '../packages/index'

const app = createApp(App)

app.use(VeCharts)

app.mount('#app')
