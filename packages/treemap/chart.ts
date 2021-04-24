import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { TreemapChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([TreemapChart])

export default defineComponent({
  name: 'TreemapChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
