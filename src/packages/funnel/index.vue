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
  import Core from '../../mixins/Core'
  import { options } from '../../base-options'
  import { funnel } from './chartHandler'
  import 'echarts/lib/chart/funnel'

  export default {
    name: 'VeFunnelChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = funnel
    }
  }
</script>
