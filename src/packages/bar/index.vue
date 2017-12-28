<template>
  <div>
    <base-echarts
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot>
      <empty-data v-if="data===null" />
    </slot>
  </div>
</template>

<script>
  import Core from '../../mixins/Core'
  import { options } from '../../base-options'
  import { bar } from './chartHandler'
  import 'echarts/lib/chart/bar'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeBarChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = bar
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
