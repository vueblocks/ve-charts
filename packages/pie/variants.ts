/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from 'vue'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Pie from './pie'
import type { PieChartSettings } from './pie'

use([PieChart, DatasetComponent])

export default defineComponent({
  name: 'VePieChart',

  extends: HocChart,

  props: {
    settings: [Object, Array] as PropType<PieChartSettings>
  },

  mounted() {
    const baseOption = new Pie(this.$props).chartHandler()

    console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
