import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

import HocChart from '../../HocChart'

use([
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer
])

export default defineComponent({
  name: 'VeBarChart',
  extends: HocChart,
  setup (props) {
    console.log(props)
  }
})
