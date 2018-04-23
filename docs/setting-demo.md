# 属性配置

## 数据项为空

<vuep template="#emptyData" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="emptyData">
<template>
  <ve-line-chart :data="chartData" :empty-text="emptyText" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {}
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
    created () {
      this.chartData = {}
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

## 异步加载图表动效

<vuep template="#loadingData" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="loadingData">
<template>
  <ve-line-chart :data="chartData" :loading="loading" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: true,
        chartData: {}
      }
    },
    methods: {
      loadingLineData () {
        this.loading = true
        setTimeout(() => {
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
          this.loading = false
      }, 2000)
      }
    },
    created () {
      this.loadingLineData()
    }
  }
</script>

## 自定义加载图表动效

> 为了保持图表组件传入参数尽量简洁，`loading` 的背景色以及 `spinner` 暂时使用覆盖 class 方式来实现

<vuep template="#customLoading" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="customLoading">
<style>
  .custom-loading .ve-charts-loading-mask {
    background-color: rgba(0, 0, 0, .8);
  }
  .custom-loading .ve-charts-loading-mask .path {
    stroke: #f35352;
  }
</style>

<template>
  <ve-line-chart class="custom-loading" :data="chartData" :loading="loading" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: true
      }
    },
    created () {
      this.chartData = {}
    }
  }
</script>

## 自定义图表高度

<vuep template="#customHeight" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="customHeight">
<template>
  <ve-line-chart :data="chartData" :height="300" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: false
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
    }
  }
</script>