/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { DatasetComponent } from 'echarts/components'

import HocChart from '../mixins/HocChart'

import Bar from './bar'
import { VeChartsData } from '../types/index'

use([BarChart, DatasetComponent])

export default defineComponent({
  name: 'VeBarChart',

  extends: HocChart,

  mounted () {
    const data = this.data as VeChartsData

    const baseOption = new Bar(data).chartHandler()

    console.log(JSON.stringify(baseOption))

    this.mergedOption = { ...this.mergedOption, ...baseOption }
  }
})
