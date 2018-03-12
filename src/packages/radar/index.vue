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
