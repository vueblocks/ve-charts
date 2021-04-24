import { defineComponent } from 'vue'

import BarChart from './chart'

export default defineComponent({
  name: 'VeBarChart',
  extends: BarChart,
  setup (props) {
    console.log(props)
  }
})
