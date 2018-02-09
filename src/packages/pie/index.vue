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
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    created () {
      this.chartHandler = pie
    }
  }
</script>
