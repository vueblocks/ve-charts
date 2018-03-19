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

## 更换配色

<vuep template="#changeColor" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="changeColor">
<template>
  <ve-pie-chart :data="chartData" :color="color" />
</template>

<script>
 module.exports = {
    components: {
    	VePieChart: window['ve-charts'].default.VePieChart
  	},
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
      this.color = [
        '#207722',
        '#68b133',
        '#a9de83',
        '#f63629',
        '#f66258',
        '#ffc0af'
      ]
    }
  }
</script>

