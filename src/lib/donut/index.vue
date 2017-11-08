<template>
  <div class="echarts-base">
    <echarts-base
      :options="options"
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
  import Core from '../../Core'
  import { options } from '../../echarts-base'
  import { donut } from '../pie/chartHandler'

  import EchartsBase from '@/components.EchartsBase.vue'

  export default {
    name: 'VeDonut',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = donut
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
