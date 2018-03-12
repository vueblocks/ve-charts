# 属性配置

## 数据项为空

<vuep template="#emptyData" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="emptyData">
<template>
  <ve-line-chart :data="chartData" :empty-text="emptyText" />
</template>

<script>
 module.exports = {
    components: {
    	VeLineChart: window['ve-charts'].default.VeLineChart
  	},
    created () {
      this.chartData = {
      }
      this.emptyText = '空数据'
    }
  }
</script>

## 自定义空数据模版

<vuep template="#emptyTemp" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="emptyTemp">
<template>
  <ve-line-chart :data="chartData">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <span>让数据飞一会儿</span>
    </div>
  </ve-line-chart>
</template>

<script>
 module.exports = {
    components: {
    	VeLineChart: window['ve-charts'].default.VeLineChart
  	},
    created () {
      this.chartData = {
      }
    }
  }
</script>

