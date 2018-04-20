<template>
  <div :class="{'ve-charts-parent': loading||isEmptyData}">
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      ref="baseEcharts"
      v-on="delegateEvents"
    />
    <slot v-if="isEmptyData">
      <empty-data :empty-text="emptyText"/>
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { line } from './chartHandler'
  import 'echarts/lib/chart/line'

  export default {
    name: 'VeLineChart',
    mixins: [Core],
    data () {
      return {
        options,
        initOptions: {
          renderer: 'canvas'
        }
      }
    },
    created () {
      this.chartHandler = line
    }
  }
</script>
