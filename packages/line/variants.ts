/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Line from './line'
import type { LineChartSettings } from './line'
import { useDataHandler } from '../use'

use([LineChart, DatasetComponent])

export default defineComponent({
  name: 'VeLineChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<LineChartSettings>
  },

  setup(props) {
    const chart = new Line(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
