# 事件处理

## 监听事件

> tips: 点击折线图中的标记

<vuep template="#lineEvent" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="lineEvent">
<template>
  <div>
    <ve-line-chart
      :data="chartData"
      :settings="lineSettings"
      :title="title"
      @click="onClick"
    />
  </div>
</template>

<script>
 module.exports = {
    data () {
      return {
        title: {}
      }
    },
    methods: {
      onClick (params) {
        this.title = {
          text: `选中维度：${params.name}`
        }
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

## 用法示例对比

**Echarts**

```js
myChart.on('click', function (params) {
    console.log(params);
});

myChart.on('legendselectchanged', function (params) {
    console.log(params);
});
```

**VeCharts**

```html
<ve-line-chart
  :data="chartData"
  :settings="lineSettings"
  @click="onClick"
  @legendselectchanged="onLegendselectchanged"
/>
```

```js
methods: {
  onClick (params) {
    console.log(params)
  },
  onLegendselectchanged (params) {
    console.log(params)
  }
}
```

## 事件列表

参见 [Echarts events](http://echarts.baidu.com/api.html#events)