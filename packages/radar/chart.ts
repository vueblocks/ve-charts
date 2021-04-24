import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([RadarChart])

export default defineComponent({
  name: 'RadarChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
