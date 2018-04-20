<template>
  <div :class="{'ve-charts-parent': loading||isEmptyData}">
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
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { scatter } from './chartHandler'
  import 'echarts/lib/chart/scatter'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeScatterChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = scatter
    },
    components: {
      BaseEcharts
    }
  }
</script>
