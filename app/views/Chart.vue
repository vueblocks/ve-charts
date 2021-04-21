<template>
  <div class="chart-content">
    <div class="chart-item" v-for="(item, index) in chartData" :key="`${type}${index}`">
      <div class="left-section">
        <div class="title">
          <strong v-text="item.title"></strong>
        </div>
        <component
          :is="`ve-${chartType}-chart`"
          class="chart-demo"
          :data="item.data"
          :settings="item.settings"
          :series-option="item.seriesOption"
          :color="color"
          :ec.sync="chart"
          v-bind="item.xprops"
        />
      </div>
      <div class="right-section">
        <section class="data">
          <div class="title">数据</div>
          <code-block :sourcecode="item.data" />
        </section>
        <section class="settings">
          <div class="title">配置项</div>
          <code-block :sourcecode="item.settings||item.xprops" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CodeBlock from '@/components/CodeBlock'
import 'echarts/lib/component/markArea'

import DATA from '@/data'
import COLOR from '@/data/color'

export default {
  name: 'Chart',
  components: {
    CodeBlock
  },
  props: {
    type: String
  },
  data () {
    return {
      chartData: {},
      chart: null
    }
  },
  watch: {
    type () {
      this.initData()
    }
  },
  created () {
    this.initData()
  },
  mounted () {
    console.log(this.chart.getHeight())
  },
  methods: {
    initData () {
      this.chartData = DATA[this.type].chartData
      this.chartType = DATA[this.type].type
      this.color = COLOR
    }
  }
}
</script>

<style lang="less">
  .chart-content {
    .chart-item {
      display: flex;
      flex-direction: row;
      height: 418px;
      margin-bottom: 40px;
      .left-section {
        position: relative;
        flex: 1;
        width: 60%;
        margin: 0 auto;
      }
      .right-section {
        margin-left: 20px;
        width: 40%;
      }
    }
  }
</style>
