<template>
  <div class="echarts-base">
    <echarts-base
      :options="options"
      :theme="theme"
      :autoResize="true"
      @chartclick="onClick"
    />
    <slot>
      <empty-data v-if="data===null" />
    </slot>
  </div>
</template>

<script>
  import Core from '../../Core'
  import { options } from '../../echarts-base'
  import { bar } from './chartHandler'

  import EchartsBase from '../../components/EchartsBase.vue'

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
      EchartsBase
    }
  }
</script>

<style lang="less">
</style>
