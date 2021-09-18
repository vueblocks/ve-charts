import { createApp } from 'vue'
import App from './App.vue'
import veCharts from './plugins/ve-charts'

const app = createApp(App)

app.use(veCharts)
app.mount('#app')
