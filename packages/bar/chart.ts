import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([BarChart])

export default defineComponent({
  name: 'BarChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
