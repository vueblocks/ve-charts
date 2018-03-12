<template>
  <div>
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot>
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
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    components: {
      BaseEcharts
    }
  }
</script>