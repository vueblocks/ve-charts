<template>
  <div>
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot v-else>
      <empty-data :empty-text="emptyText"/>
    </slot>
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { line } from './chartHandler'
  import 'echarts/lib/chart/line'

  export default {
    name: 'VeLineChart',
    mixins: [Core],
    data () {
      return {
        options,
        initOptions: {
          renderer: 'canvas'
        }
      }
    },
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    created () {
      this.chartHandler = line
    }
  }
</script>
