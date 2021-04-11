import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { TreeChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([TreeChart])

export default defineComponent({
  name: 'TreeChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
