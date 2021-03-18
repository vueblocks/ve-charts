import Vue from 'vue'
import App from './App.vue'
import { VeBarChart, VeLineChart } from 've-charts'

Vue.component(VeBarChart.name, VeBarChart)
Vue.component(VeLineChart.name, VeLineChart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
