// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import VeCharts from '../lib/ve-charts.min' // 调试开发
// import '../lib/common' // 按需引入
// import VeBarChart from '../lib/VeBarChart' // 按需引入
// import VeCharts from '../lib/ve-charts.min' // 调试生产
// import '../lib/ve-charts.min.css'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.use(ElementUI, { size: 'small' })
Vue.use(VeCharts)
// Vue.component('VeBarChart', VeBarChart)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
