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
  import { geo } from './chartHandler'

  import EchartsBase from '../../EchartsBase.vue'
  import chinaMap from './china.json'

  export default {
    name: 'VeGeo',
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
      EchartsBase.registerMap('china', chinaMap)
      this.chartHandler = geo
    },
    components: {
      EchartsBase
    }
  }
</script>

<style lang="less">
</style>
