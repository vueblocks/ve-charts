<template>
  <div>
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
