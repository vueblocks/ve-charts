<template>
  <div class="ve-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      :init-options="initOptions"
      :options="options"
      :autoResize="true"
      :theme="theme"
      :chart-height='height'
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
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
