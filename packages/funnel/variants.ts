/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { FunnelChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Funnel from './funnel'
import type { FunnelChartSettings } from './funnel'
import { useDataHandler } from '../use'

use([FunnelChart, DatasetComponent])

export default defineComponent({
  name: 'VeFunnelChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<FunnelChartSettings>
  },

  setup(props) {
    const chart = new Funnel(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
