import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'

import {
  GridComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

import HocChart from '../../HocChart'

use([
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer
])

export default defineComponent({
  name: 'VeLineChart',
  extends: HocChart
})
