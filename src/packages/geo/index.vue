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
      handler: function (val) {
        const chinaMap = require('echarts/map/json/china.json')
        if (val) {
          const mapData = val === 'china'
            ? chinaMap
            : require(`echarts/map/json/province/${val}.json`)
          BaseEcharts.registerMap(val, mapData)
        } else {
          BaseEcharts.registerMap('china', chinaMap)
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
