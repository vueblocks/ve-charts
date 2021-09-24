/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { ScatterChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'
import Scatter from './scatter'
import type { ScatterChartSettings } from './scatter'
import { useDataHandler } from '../use'

use([ScatterChart])

export default defineComponent({
  name: 'VeScatterChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<ScatterChartSettings>
  },

  setup(props) {
    const chart = new Scatter(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
