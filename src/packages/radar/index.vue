<template>
  <div :class="{'ve-charts-parent': loading||(isEmptyData&&isEmptySeries)}">
    <base-echarts
      v-if="!isEmptyData || !isEmptySeries"
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
  import { radar } from './chartHandler'
  import 'echarts/lib/chart/radar'

  export default {
    name: 'VeRadarChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = radar
    }
  }
</script>
