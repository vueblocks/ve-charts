/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { ScatterChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Bar from './scatter'
import type { ScatterChartSettings } from './scatter'

use([ScatterChart, DatasetComponent])

export default defineComponent({
  name: 'VeScatterChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<ScatterChartSettings>
  },

  mounted() {
    const baseOption = new Bar(this.$props).chartHandler()

    // console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
