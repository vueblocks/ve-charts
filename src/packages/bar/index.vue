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
  import { bar } from './chartHandler'
  import 'echarts/lib/chart/bar'

  export default {
    name: 'VeBarChart',
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
      this.chartHandler = bar
    }
  }
</script>
