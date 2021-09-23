/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Bar from './bar'
import type { BarChartSettings } from './bar'

use([BarChart, DatasetComponent])

export default defineComponent({
  name: 'VeBarChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<BarChartSettings>
  },

  mounted() {
    const vechart = new Bar(this.$props)
    const baseOption = vechart.chartHandler()

    console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
