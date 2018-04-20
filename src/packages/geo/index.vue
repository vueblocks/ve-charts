<template>
  <div>
    <base-echarts
      v-if="!isEmptyData"
      :options="options"
      :autoResize="true"
      :theme="theme"
      v-on="delegateEvents"
    />
    <slot v-else>
      <empty-data :empty-text="emptyText"/>
    </slot>
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { geo } from './chartHandler'

  import BaseEcharts from '../../components/BaseEcharts'
  import chinaMap from './china.json'

  export default {
    name: 'VeGeoChart',
    components: {
      BaseEcharts
    },
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      BaseEcharts.registerMap('china', chinaMap)
      this.chartHandler = geo
    }
  }
</script>
