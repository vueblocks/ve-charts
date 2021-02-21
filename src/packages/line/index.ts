import { defineComponent } from 'vue-demi'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'

echarts.use([LineChart])

export default defineComponent({
  name: 'VeLineChart',
  setup () {

  }
})
