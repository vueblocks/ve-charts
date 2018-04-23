<template>
  <div class="ve-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      :chart-height='height'
      v-on="delegateEvents"
    />
    <slot v-if="isEmptyData&&!loading">
      <empty-data :empty-text="emptyText"/>
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>
<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { treemap } from './chartHandler'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeTreemapChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = treemap
    },
    components: {
      BaseEcharts
    }
  }
</script>