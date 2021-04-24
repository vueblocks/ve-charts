import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { ScatterChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([ScatterChart])

export default defineComponent({
  name: 'ScatterChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
