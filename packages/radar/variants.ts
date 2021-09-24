/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'
import Radar from './radar'
import type { RadarChartSettings } from './radar'
import { useDataHandler } from '../use'

use([RadarChart])

export default defineComponent({
  name: 'VeRadarChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<RadarChartSettings>
  },

  setup(props) {
    const chart = new Radar(props)

    const mergedOption = useDataHandler(chart, props)

    return {
      mergedOption
    }
  }
})
