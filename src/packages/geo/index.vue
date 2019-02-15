<template>
  <div class="ve-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      :init-options="initOptions"
      :options="options"
      :autoResize="true"
      :theme="theme"
      :chart-height='height'
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
      <empty-data :empty-text="emptyText"/>
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
import Core from '../../mixins/Core'
import { options } from '../../base-options'
import { geo } from './chartHandler'
import BaseEcharts from '../../components/BaseEcharts'

import 'echarts/lib/chart/map'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/geo'

export default {
  name: 'VeGeoChart',
  mixins: [Core],
  data () {
    return {
      options
    }
  },
  watch: {
    'settings.position': {
      handler: function (newMap) {
        const defaultMap = 'china'
        if (newMap) {
          const mapData = require(`echarts/map/json/${newMap}.json`)
          BaseEcharts.registerMap(newMap, mapData)
        } else {
          const mapData = require(`echarts/map/json/${defaultMap}.json`)
          BaseEcharts.registerMap(defaultMap, mapData)
        }
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.chartHandler = geo
  }
}
</script>
