import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([BarChart])

export default defineComponent({
  name: 'VeBarChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
