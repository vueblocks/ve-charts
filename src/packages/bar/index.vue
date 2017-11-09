<template>
  <div class="base-echarts">
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
  import Core from '../../Core'
  import { options } from '../../base-options'
  import { bar } from './chartHandler'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeBar',
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

<style lang="less">
</style>
