import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { FunnelChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([FunnelChart])

export default defineComponent({
  name: 'FunnelChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
