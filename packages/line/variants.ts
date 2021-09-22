/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Line from './line'
import type { LineChartSettings } from './line'

use([LineChart, DatasetComponent])

export default defineComponent({
  name: 'VeLineChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<LineChartSettings>
  },

  mounted() {
    const baseOption = new Line(this.$props).chartHandler()

    console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
