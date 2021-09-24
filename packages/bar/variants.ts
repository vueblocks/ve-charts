/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Bar from './bar'
import type { BarChartSettings } from './bar'
import { useDataHandler } from '../use'

use([BarChart, DatasetComponent])

export default defineComponent({
  name: 'VeBarChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<BarChartSettings>
  },

  setup(props) {
    const chart = new Bar(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
