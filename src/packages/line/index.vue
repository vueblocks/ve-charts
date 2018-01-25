<template>
  <div>
    <base-echarts
      :options="options"
      :init-options="initOptions"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot>
      <empty-data v-if="data == null" />
    </slot>
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { line } from './chartHandler'
  import 'echarts/lib/chart/line'

  import BaseEcharts from '../../components/BaseEcharts'

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
    created () {
      this.chartHandler = line
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
