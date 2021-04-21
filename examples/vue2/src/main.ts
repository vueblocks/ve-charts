import Vue from 'vue'
import App from './App.vue'
import { BarChart, LineChart } from 've-charts'

Vue.use(BarChart)
Vue.component(LineChart.name, LineChart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
