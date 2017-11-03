<template>
  <div class="echarts-base">
    <echarts-base
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot>
      <empty-data v-if="data==null" />
    </slot>
  </div>
</template>

<script>
  import Core from '../../Core'
  import { options } from '../../echarts-base'
  import { gauge } from './chartHandler'

  import EchartsBase from '../../EchartsBase.vue'

  export default {
    name: 'VeGauge',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = gauge
    },
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    components: {
      EchartsBase
    }
  }
</script>

<style lang="less">
</style>
