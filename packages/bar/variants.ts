import { defineComponent } from 'vue-demi'

import BarChart from './chart'

export default defineComponent({
  name: 'VeBarChart',
  extends: BarChart,
  setup (props) {
    console.log(props)
  }
})
