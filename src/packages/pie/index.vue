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
  import { pie } from './chartHandler'
  import 'echarts/lib/chart/pie'

  export default {
    name: 'VePieChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = pie
    }
  }
</script>
