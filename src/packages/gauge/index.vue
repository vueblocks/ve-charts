<template>
  <div>
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      v-on="delegateEvents"
    />
    <slot v-else>
      <empty-data :empty-text="emptyText"/>
    </slot>
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { gauge } from './chartHandler'
  import 'echarts/lib/chart/gauge'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeGaugeChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = gauge
    },
    components: {
      BaseEcharts
    }
  }
</script>
