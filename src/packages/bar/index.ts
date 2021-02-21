import { defineComponent } from 'vue-demi'
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'

echarts.use([BarChart])

export default defineComponent({
  name: 'VeBarChart',
  setup () {

  }
})
