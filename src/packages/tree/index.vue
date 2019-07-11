<template>
  <div class="ve-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      :init-options="initOptions"
      :options="options"
      :autoResize="true"
      :theme="theme"
      :chart-height='height'
      :ec.sync="ec"
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
      <empty-data :empty-text="emptyText"/>
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
import Core from '../../mixins/Core'
import { options } from '../../base-options'
import { tree } from './chartHandler'
import 'echarts/lib/chart/tree'

export default {
  name: 'VeTreeChart',
  mixins: [Core],
  data () {
    return {
      options
    }
  },
  created () {
    this.chartHandler = tree
  }
}
</script>
