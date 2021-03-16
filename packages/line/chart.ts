import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([LineChart])

export default defineComponent({
  name: 'VeLineChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
