import Vue from 'vue'

import 'normalize.css'
import '@/plugins/element-ui'
import '@/plugins/ve-charts'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
