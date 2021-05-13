/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'
import Bar from './bar'

use([BarChart, DatasetComponent])

export default defineComponent({
  name: 'VeBarChart',

  extends: HocChart,

  mounted () {
    const baseOption = new Bar(this.$props).chartHandler()

    console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
