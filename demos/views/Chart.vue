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
        />
      </div>
      <div class="right-section">
        <section class="data">
          <div class="title">数据</div>
          <code-block :sourcecode="item.data" />
        </section>
        <section class="settings">
          <div class="title">配置项</div>
          <code-block :sourcecode="item.settings" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import { cloneDeep } from 'lodash'
import CodeBlock from '@/components/CodeBlock'

import DATA from '@/data'

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
      chartData: {}
    }
  },
  watch: {
    type () {
      this.initData()
    }
  },
  methods: {
    initData () {
      this.chartData = DATA[this.type].chartData
      this.chartType = DATA[this.type].type
    }
  },
  created () {
    this.initData()
  }
}
</script>

<style lang="less">
  .chart-content {
    .chart-item {
      display: flex;
      flex-direction: row;
      height: 400px;
      margin-bottom: 40px;
      .left-section {
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
  .chart-demo {
    .echarts {
      width: auto;
    }
  }
</style>


