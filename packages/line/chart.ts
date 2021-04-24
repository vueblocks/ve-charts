import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([LineChart])

export default defineComponent({
  name: 'LineChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
