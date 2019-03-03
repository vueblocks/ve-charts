<template>
  <div class="ve-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      :init-options="initOptions"
      :options="options"
      :autoResize="true"
      :chart-height='height'
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
      <empty-data :empty-text="emptyText"/>
    </slot>
    <loading-chart v-if="loading"/>
  </div>
</template>

<script>
import Core from '../../mixins/Core'
import {options} from '../../base-options'
import {liquidFill} from './chartHandler'
import 'echarts-liquidfill/dist/echarts-liquidfill.min'

export default {
  name: 'VeLiquidfillChart',
  mixins: [Core],
  data() {
    return {
      options
    }
  },
  created() {
    this.chartHandler = liquidFill
  }
}
</script>
