<template>
  <div>
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