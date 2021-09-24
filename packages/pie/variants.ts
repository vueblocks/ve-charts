/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Pie from './pie'
import type { PieChartSettings } from './pie'
import { useDataHandler } from '../use'

use([PieChart, DatasetComponent])

export default defineComponent({
  name: 'VePieChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<PieChartSettings>
  },

  setup(props) {
    const chart = new Pie(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
