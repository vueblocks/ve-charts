<template>
  <div>
    <empty-data :empty-text="emptyText" v-if="isEmptyData" />
    <base-echarts
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
      v-else
    />
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
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    created () {
      this.chartHandler = radar
    }
  }
</script>
