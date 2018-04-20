# 事件处理

## 监听事件

<vuep template="#lineEvent" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="lineEvent">
<template>
  <ve-line-chart :data="chartData" :settings="lineSettings" @click="onClick" />
</template>

<script>
 module.exports = {
    methods: {
      onClick (params) {
        console.log(params)
      }
    },
    created () {
      this.chartData = {
        dimensions: {
          name: 'Repo',
          data: [
            'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
            'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
          ].reverse()
        },
        measures: [
          {
            name: 'Rising Star',
            data: [
              40000, 27800, 22500, 22000, 21900,
              20200, 17700, 15600, 14900, 14800
            ].reverse()
          }
        ]
      }
      this.lineSettings = {
        smooth: true,
        showSymbol: false,
        symbol: 'circle'
      }
    }
  }
</script>