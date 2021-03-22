import { defineComponent } from 'vue-demi'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'

import HocChart from '../mixins/HocChart'

use([PieChart])

export default defineComponent({
  name: 'PieChart',
  extends: HocChart,
  setup () {
    import('echarts/charts')
      .then((module) => {
        console.log(module)
      })
  }
})
