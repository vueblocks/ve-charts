import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { GaugeChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([GaugeChart])

export default defineComponent({
  name: 'GaugeChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
