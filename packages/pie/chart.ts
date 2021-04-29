import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([PieChart])

export default defineComponent({
  name: 'PieChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
