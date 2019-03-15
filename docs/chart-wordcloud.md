# 词云图

> Tips: 词云图基于 ECharts 的 扩展 `echarts-wordcloud` 封装，在使用前需安装此扩展
> `npm install echarts-wordcloud`

## 基础词云图

<vuep template="#basicWordcloud" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicWordcloud">
<template>
  <ve-wordcloud-chart :data="chartData" />
</template>

<script>
  const baseData = [
    {
      name: 'Sam',
      value: 100
    },
    {
      name: 'Macys',
      value: 61
    },
    {
      name: 'Amy',
      value: 43
    },
    {
      name: 'Jurassic',
      value: 40
    },
    {
      name: 'Charter',
      value: 24
    },
    {
      name: 'Chick',
      value: 44
    },
    {
      name: 'Planet',
      value: 98
    },
    {
      name: 'Pitch',
      value: 14
    },
    {
      name: 'Express',
      value: 11
    },
    {
      name: 'Home',
      value: 65
    }
  ]
  module.exports = {
    created () {
      this.chartData = {
        measures: baseData
      }
    }
  }
</script>

## 词云随机字体颜色

<vuep template="#word" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="word">
<template>
  <ve-wordcloud-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const Data = [
    {
      'name': 'visualMap',
      'value': 148
    },
    {
      'name': 'continuous',
      'value': 101
    },
    {
      'name': 'contoller',
      'value': 24
    },
    {
      'name': 'series',
      'value': 523
    },
    {
      'name': 'gauge',
      'value': 110
    },
    {
      'name': 'detail',
      'value': 34
    },
    {
      'name': 'piecewise',
      'value': 69
    },
    {
      'name': 'textStyle',
      'value': 179
    },
    {
      'name': 'markPoint',
      'value': 136
    },
    {
      'name': 'pie',
      'value': 197
    },
    {
      'name': 'roseType',
      'value': 31
    },
    {
      'name': 'label',
      'value': 193
    },
    {
      'name': 'emphasis',
      'value': 109
    },
    {
      'name': 'yAxis',
      'value': 239
    },
    {
      'name': 'name',
      'value': 124
    },
    {
      'name': 'type',
      'value': 151
    },
    {
      'name': 'gridIndex',
      'value': 71
    },
    {
      'name': 'normal',
      'value': 222
    },
    {
      'name': 'itemStyle',
      'value': 183
    },
    {
      'name': 'min',
      'value': 67
    },
    {
      'name': 'silent',
      'value': 75
    },
    {
      'name': 'animation',
      'value': 69
    },
    {
      'name': 'offsetCenter',
      'value': 15
    },
    {
      'name': 'inverse',
      'value': 60
    },
    {
      'name': 'borderColor',
      'value': 69
    },
    {
      'name': 'markLine',
      'value': 128
    },
    {
      'name': 'line',
      'value': 277
    },
    {
      'name': 'radiusAxis',
      'value': 81
    },
    {
      'name': 'radar',
      'value': 126
    },
    {
      'name': 'data',
      'value': 246
    },
    {
      'name': 'dataZoom',
      'value': 156
    },
    {
      'name': 'tooltip',
      'value': 208
    },
    {
      'name': 'toolbox',
      'value': 158
    },
    {
      'name': 'geo',
      'value': 130
    },
    {
      'name': 'parallelAxis',
      'value': 63
    },
    {
      'name': 'parallel',
      'value': 72
    },
    {
      'name': 'max',
      'value': 58
    },
    {
      'name': 'bar',
      'value': 207
    },
    {
      'name': 'heatmap',
      'value': 55
    },
    {
      'name': 'map',
      'value': 142
    },
    {
      'name': 'animationDuration',
      'value': 58
    },
    {
      'name': 'animationDelay',
      'value': 49
    },
    {
      'name': 'splitNumber',
      'value': 71
    },
    {
      'name': 'axisLine',
      'value': 112
    },
    {
      'name': 'lineStyle',
      'value': 140
    },
    {
      'name': 'splitLine',
      'value': 84
    },
    {
      'name': 'axisTick',
      'value': 93
    },
    {
      'name': 'axisLabel',
      'value': 132
    },
    {
      'name': 'pointer',
      'value': 24
    },
    {
      'name': 'color',
      'value': 153
    },
    {
      'name': 'title',
      'value': 196
    },
    {
      'name': 'formatter',
      'value': 123
    },
    {
      'name': 'slider',
      'value': 85
    },
    {
      'name': 'legend',
      'value': 257
    },
    {
      'name': 'grid',
      'value': 168
    },
    {
      'name': 'smooth',
      'value': 35
    },
    {
      'name': 'smoothMonotone',
      'value': 26
    },
    {
      'name': 'sampling',
      'value': 27
    },
    {
      'name': 'feature',
      'value': 113
    },
    {
      'name': 'saveAsImage',
      'value': 51
    },
    {
      'name': 'polar',
      'value': 79
    },
    {
      'name': 'calculable',
      'value': 29
    },
    {
      'name': 'backgroundColor',
      'value': 97
    },
    {
      'name': 'excludeComponents',
      'value': 11
    },
    {
      'name': 'show',
      'value': 143
    },
    {
      'name': 'text',
      'value': 50
    },
    {
      'name': 'icon',
      'value': 52
    },
    {
      'name': 'dimension',
      'value': 21
    },
    {
      'name': 'inRange',
      'value': 32
    },
    {
      'name': 'animationEasing',
      'value': 54
    },
    {
      'name': 'animationDurationUpdate',
      'value': 47
    },
    {
      'name': 'animationDelayUpdate',
      'value': 47
    },
    {
      'name': 'animationEasingUpdate',
      'value': 47
    },
    {
      'name': 'xAxis',
      'value': 299
    },
    {
      'name': 'angleAxis',
      'value': 73
    },
    {
      'name': 'showTitle',
      'value': 22
    },
    {
      'name': 'dataView',
      'value': 52
    },
    {
      'name': 'restore',
      'value': 30
    },
    {
      'name': 'timeline',
      'value': 100
    },
    {
      'name': 'range',
      'value': 21
    },
    {
      'name': 'value',
      'value': 75
    },
    {
      'name': 'precision',
      'value': 29
    },
    {
      'name': 'target',
      'value': 37
    },
    {
      'name': 'zlevel',
      'value': 73
    },
    {
      'name': 'symbol',
      'value': 93
    },
    {
      'name': 'interval',
      'value': 89
    },
    {
      'name': 'symbolSize',
      'value': 72
    },
    {
      'name': 'showSymbol',
      'value': 35
    },
    {
      'name': 'inside',
      'value': 94
    },
    {
      'name': 'xAxisIndex',
      'value': 61
    },
    {
      'name': 'orient',
      'value': 64
    },
    {
      'name': 'boundaryGap',
      'value': 71
    },
    {
      'name': 'nameGap',
      'value': 69
    },
    {
      'name': 'zoomLock',
      'value': 23
    },
    {
      'name': 'hoverAnimation',
      'value': 48
    },
    {
      'name': 'legendHoverLink',
      'value': 59
    },
    {
      'name': 'stack',
      'value': 53
    },
    {
      'name': 'throttle',
      'value': 21
    },
    {
      'name': 'connectNulls',
      'value': 29
    },
    {
      'name': 'clipOverflow',
      'value': 28
    },
    {
      'name': 'startValue',
      'value': 23
    },
    {
      'name': 'minInterval',
      'value': 57
    },
    {
      'name': 'opacity',
      'value': 55
    },
    {
      'name': 'splitArea',
      'value': 69
    },
    {
      'name': 'filterMode',
      'value': 25
    },
    {
      'name': 'end',
      'value': 20
    },
    {
      'name': 'left',
      'value': 80
    },
    {
      'name': 'funnel',
      'value': 47
    },
    {
      'name': 'lines',
      'value': 80
    },
    {
      'name': 'baseline',
      'value': 20
    },
    {
      'name': 'align',
      'value': 51
    },
    {
      'name': 'coord',
      'value': 29
    },
    {
      'name': 'nameTextStyle',
      'value': 86
    },
    {
      'name': 'width',
      'value': 65
    },
    {
      'name': 'shadowBlur',
      'value': 67
    },
    {
      'name': 'effect',
      'value': 30
    },
    {
      'name': 'period',
      'value': 15
    },
    {
      'name': 'areaColor',
      'value': 25
    },
    {
      'name': 'borderWidth',
      'value': 60
    },
    {
      'name': 'nameLocation',
      'value': 66
    },
    {
      'name': 'position',
      'value': 108
    },
    {
      'name': 'containLabel',
      'value': 41
    },
    {
      'name': 'scatter',
      'value': 103
    },
    {
      'name': 'areaStyle',
      'value': 72
    },
    {
      'name': 'scale',
      'value': 62
    },
    {
      'name': 'pieces',
      'value': 20
    },
    {
      'name': 'categories',
      'value': 31
    },
    {
      'name': 'selectedMode',
      'value': 61
    },
    {
      'name': 'itemSymbol',
      'value': 16
    },
    {
      'name': 'effectScatter',
      'value': 84
    },
    {
      'name': 'fontStyle',
      'value': 58
    },
    {
      'name': 'fontSize',
      'value': 58
    },
    {
      'name': 'margin',
      'value': 32
    },
    {
      'name': 'iconStyle',
      'value': 47
    },
    {
      'name': 'link',
      'value': 36
    },
    {
      'name': 'axisPointer',
      'value': 72
    },
    {
      'name': 'showDelay',
      'value': 29
    },
    {
      'name': 'graph',
      'value': 148
    },
    {
      'name': 'subtext',
      'value': 37
    },
    {
      'name': 'selected',
      'value': 53
    },
    {
      'name': 'barCategoryGap',
      'value': 28
    },
    {
      'name': 'barGap',
      'value': 33
    },
    {
      'name': 'barWidth',
      'value': 39
    },
    {
      'name': 'coordinateSystem',
      'value': 60
    },
    {
      'name': 'barBorderRadius',
      'value': 16
    },
    {
      'name': 'z',
      'value': 63
    },
    {
      'name': 'polarIndex',
      'value': 38
    },
    {
      'name': 'shadowOffsetX',
      'value': 55
    },
    {
      'name': 'shadowColor',
      'value': 61
    },
    {
      'name': 'shadowOffsetY',
      'value': 49
    },
    {
      'name': 'height',
      'value': 44
    },
    {
      'name': 'barMinHeight',
      'value': 23
    },
    {
      'name': 'lang',
      'value': 11
    },
    {
      'name': 'symbolRotate',
      'value': 52
    },
    {
      'name': 'symbolOffset',
      'value': 50
    },
    {
      'name': 'showAllSymbol',
      'value': 30
    },
    {
      'name': 'transitionDuration',
      'value': 31
    },
    {
      'name': 'bottom',
      'value': 61
    },
    {
      'name': 'fillerColor',
      'value': 15
    },
    {
      'name': 'nameMap',
      'value': 35
    },
    {
      'name': 'barMaxWidth',
      'value': 27
    },
    {
      'name': 'radius',
      'value': 45
    },
    {
      'name': 'center',
      'value': 49
    },
    {
      'name': 'magicType',
      'value': 57
    },
    {
      'name': 'labelPrecision',
      'value': 15
    }
  ]
  module.exports = {
    created () {
      this.chartData = {
        measures: Data
      }
      this.chartSettings = {
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      }
    }
  }
</script>

## 词云tooltip

<vuep template="#cloud" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="cloud">
<template>
  <ve-wordcloud-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const Data = [
     {
       'name': '曲美',
       'value': 347
     },
     {
       'name': '紫砂壶',
       'value': 192
     },
     {
       'name': '顾家家居',
       'value': 147
     },
     {
       'name': '紫砂',
       'value': 140
     },
     {
       'name': '欧派',
       'value': 132
     },
     {
       'name': '索菲亚',
       'value': 79
     },
     {
       'name': '尚品宅配',
       'value': 77
     },
     {
       'name': '炼焦',
       'value': 61
     },
     {
       'name': '净资本',
       'value': 52
     },
     {
       'name': '毕节',
       'value': 51
     },
     {
       'name': '新疆维吾尔自治区',
       'value': 48
     },
     {
       'name': '全风',
       'value': 36
     },
     {
       'name': '泡茶',
       'value': 34
     },
     {
       'name': '滑道',
       'value': 32
     },
     {
       'name': '盐碱',
       'value': 29
     },
     {
       'name': '程天',
       'value': 28
     },
     {
       'name': '悦舍',
       'value': 28
     },
     {
       'name': '星艺佳',
       'value': 27
     },
     {
       'name': '孝感',
       'value': 26
     },
     {
       'name': '万不得已',
       'value': 26
     },
     {
       'name': '余省市',
       'value': 25
     },
     {
       'name': '杨磊',
       'value': 25
     },
     {
       'name': '外骨骼',
       'value': 24
     },
     {
       'name': '李炳军',
       'value': 24
     },
     {
       'name': '麻药',
       'value': 24
     },
     {
       'name': '年新高',
       'value': 24
     },
     {
       'name': '做市商',
       'value': 22
     },
     {
       'name': '每斤',
       'value': 22
     },
     {
       'name': '茶壶',
       'value': 22
     },
     {
       'name': '西林',
       'value': 22
     },
     {
       'name': '盐碱地',
       'value': 22
     },
     {
       'name': '家博会',
       'value': 20
     },
     {
       'name': '试种',
       'value': 19
     },
     {
       'name': '亿丰',
       'value': 19
     },
     {
       'name': '平准',
       'value': 18
     },
     {
       'name': '王天',
       'value': 18
     },
     {
       'name': '韬略',
       'value': 17
     },
     {
       'name': '矿用',
       'value': 17
     },
     {
       'name': '建账',
       'value': 17
     },
     {
       'name': '张海霞',
       'value': 17
     },
     {
       'name': '大城县',
       'value': 16
     },
     {
       'name': '朔川',
       'value': 16
     },
     {
       'name': '孝感市',
       'value': 16
     },
     {
       'name': '博科',
       'value': 16
     },
     {
       'name': '颜志宇',
       'value': 16
     },
     {
       'name': '赝品',
       'value': 16
     },
     {
       'name': '倪虹',
       'value': 16
     },
     {
       'name': '陶企',
       'value': 16
     },
     {
       'name': '混淆视听',
       'value': 15
     },
     {
       'name': '立家',
       'value': 15
     },
     {
       'name': '五岳',
       'value': 14
     },
     {
       'name': '招须',
       'value': 14
     },
     {
       'name': '孙潇阳',
       'value': 14
     },
     {
       'name': '湟水',
       'value': 14
     },
     {
       'name': '美光',
       'value': 14
     },
     {
       'name': '罔顾',
       'value': 14
     },
     {
       'name': '奥斯陆',
       'value': 14
     },
     {
       'name': '言也',
       'value': 14
     },
     {
       'name': '关炜宁',
       'value': 14
     },
     {
       'name': '王思强',
       'value': 14
     },
     {
       'name': '殷智贤',
       'value': 14
     },
     {
       'name': '麻隆',
       'value': 14
     },
     {
       'name': '郑州瑞',
       'value': 13
     },
     {
       'name': ' 路',
       'value': 13
     },
     {
       'name': '周四净',
       'value': 13
     },
     {
       'name': '焦企',
       'value': 13
     }
   ]
  module.exports = {
    created () {
      this.chartData = {
        measures: Data
      }
      this.chartSettings = {
        shape: 'triangle',
        tooltip:{}
      }
    }
  }
</script>

## 单个词颜色处理

<vuep template="#last" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="last">
<template>
  <ve-wordcloud-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const Data = [
     {
       'name': '曲美',
       'value': 447,
        textStyle: {
         normal: {
           color: '#f4a'
         }
       }
     },
     {
       'name': '紫砂壶',
       'value': 192
     },
     {
       'name': '顾家家居',
       'value': 147
     },
     {
       'name': '紫砂',
       'value': 140
     },
     {
       'name': '欧派',
       'value': 132
     },
     {
       'name': '索菲亚',
       'value': 79
     },
     {
       'name': '尚品宅配',
       'value': 77
     },
     {
       'name': '炼焦',
       'value': 61
     },
     {
       'name': '净资本',
       'value': 52
     },
     {
       'name': '毕节',
       'value': 51
     },
     {
       'name': '新疆维吾尔自治区',
       'value': 48
     },
     {
       'name': '全风',
       'value': 36
     },
     {
       'name': '泡茶',
       'value': 34
     },
     {
       'name': '滑道',
       'value': 32
     },
     {
       'name': '盐碱',
       'value': 29
     },
     {
       'name': '程天',
       'value': 28
     },
     {
       'name': '悦舍',
       'value': 28
     },
     {
       'name': '星艺佳',
       'value': 27
     },
     {
       'name': '孝感',
       'value': 26
     },
     {
       'name': '万不得已',
       'value': 26
     },
     {
       'name': '余省市',
       'value': 25
     },
     {
       'name': '杨磊',
       'value': 25
     },
     {
       'name': '外骨骼',
       'value': 24
     },
     {
       'name': '李炳军',
       'value': 24
     },
     {
       'name': '麻药',
       'value': 24
     },
     {
       'name': '年新高',
       'value': 24
     },
     {
       'name': '做市商',
       'value': 22
     },
     {
       'name': '每斤',
       'value': 22
     },
     {
       'name': '茶壶',
       'value': 22
     },
     {
       'name': '西林',
       'value': 22
     },
     {
       'name': '盐碱地',
       'value': 22
     },
     {
       'name': '家博会',
       'value': 20
     },
     {
       'name': '试种',
       'value': 19
     },
     {
       'name': '亿丰',
       'value': 19
     },
     {
       'name': '平准',
       'value': 18
     },
     {
       'name': '王天',
       'value': 18
     },
     {
       'name': '韬略',
       'value': 17
     },
     {
       'name': '矿用',
       'value': 17
     },
     {
       'name': '建账',
       'value': 17
     },
     {
       'name': '张海霞',
       'value': 17
     },
     {
       'name': '大城县',
       'value': 16
     },
     {
       'name': '朔川',
       'value': 16
     },
     {
       'name': '孝感市',
       'value': 16
     },
     {
       'name': '博科',
       'value': 16
     },
     {
       'name': '颜志宇',
       'value': 16
     },
     {
       'name': '赝品',
       'value': 16
     },
     {
       'name': '倪虹',
       'value': 16
     },
     {
       'name': '陶企',
       'value': 16
     },
     {
       'name': '混淆视听',
       'value': 15
     },
     {
       'name': '立家',
       'value': 15
     },
     {
       'name': '五岳',
       'value': 14
     },
     {
       'name': '招须',
       'value': 14
     },
     {
       'name': '孙潇阳',
       'value': 14
     },
     {
       'name': '湟水',
       'value': 14
     },
     {
       'name': '美光',
       'value': 14
     },
     {
       'name': '罔顾',
       'value': 14
     },
     {
       'name': '奥斯陆',
       'value': 14
     },
     {
       'name': '言也',
       'value': 14
     },
     {
       'name': '关炜宁',
       'value': 14
     },
     {
       'name': '王思强',
       'value': 14
     },
     {
       'name': '殷智贤',
       'value': 14
     },
     {
       'name': '麻隆',
       'value': 14
     },
     {
       'name': '郑州瑞',
       'value': 13
     },
     {
       'name': ' 路',
       'value': 13
     },
     {
       'name': '周四净',
       'value': 13
     },
     {
       'name': '焦企',
       'value': 13
     }
   ]
  module.exports = {
    created () {
      this.chartData = {
        measures: Data
      }
      this.chartSettings = {
        shape: 'triangle',
        tooltip:{}
      }
    }
  }
</script>

## 最优效果

<vuep template="#best" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="best">
<template>
  <ve-wordcloud-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const Data = [
     {
       'name': '曲美',
       'value': 447
     },
     {
       'name': '紫砂壶',
       'value': 192
     },
     {
       'name': '顾家家居',
       'value': 147
     },
     {
       'name': '紫砂',
       'value': 140
     },
     {
       'name': '欧派',
       'value': 132
     },
     {
       'name': '索菲亚',
       'value': 79
     },
     {
       'name': '尚品宅配',
       'value': 77
     },
     {
       'name': '炼焦',
       'value': 61
     },
     {
       'name': '净资本',
       'value': 52
     },
     {
       'name': '毕节',
       'value': 51
     },
     {
       'name': '新疆维吾尔自治区',
       'value': 48
     },
     {
       'name': '全风',
       'value': 36
     },
     {
       'name': '泡茶',
       'value': 34
     },
     {
       'name': '滑道',
       'value': 32
     },
     {
       'name': '盐碱',
       'value': 29
     },
     {
       'name': '程天',
       'value': 28
     },
     {
       'name': '悦舍',
       'value': 28
     },
     {
       'name': '星艺佳',
       'value': 27
     },
     {
       'name': '孝感',
       'value': 26
     },
     {
       'name': '万不得已',
       'value': 26
     },
     {
       'name': '余省市',
       'value': 25
     },
     {
       'name': '杨磊',
       'value': 25
     },
     {
       'name': '外骨骼',
       'value': 24
     },
     {
       'name': '李炳军',
       'value': 24
     },
     {
       'name': '麻药',
       'value': 24
     },
     {
       'name': '年新高',
       'value': 24
     },
     {
       'name': '做市商',
       'value': 22
     },
     {
       'name': '每斤',
       'value': 22
     },
     {
       'name': '茶壶',
       'value': 22
     },
     {
       'name': '西林',
       'value': 22
     },
     {
       'name': '盐碱地',
       'value': 22
     },
     {
       'name': '家博会',
       'value': 20
     },
     {
       'name': '试种',
       'value': 19
     },
     {
       'name': '亿丰',
       'value': 19
     },
     {
       'name': '平准',
       'value': 18
     },
     {
       'name': '王天',
       'value': 18
     },
     {
       'name': '韬略',
       'value': 17
     },
     {
       'name': '矿用',
       'value': 17
     },
     {
       'name': '建账',
       'value': 17
     },
     {
       'name': '张海霞',
       'value': 17
     },
     {
       'name': '大城县',
       'value': 16
     },
     {
       'name': '朔川',
       'value': 16
     },
     {
       'name': '孝感市',
       'value': 16
     },
     {
       'name': '博科',
       'value': 16
     },
     {
       'name': '颜志宇',
       'value': 16
     },
     {
       'name': '赝品',
       'value': 16
     },
     {
       'name': '倪虹',
       'value': 16
     },
     {
       'name': '陶企',
       'value': 16
     },
     {
       'name': '混淆视听',
       'value': 15
     },
     {
       'name': '立家',
       'value': 15
     },
     {
       'name': '五岳',
       'value': 14
     },
     {
       'name': '招须',
       'value': 14
     },
     {
       'name': '孙潇阳',
       'value': 14
     },
     {
       'name': '湟水',
       'value': 14
     },
     {
       'name': '美光',
       'value': 14
     },
     {
       'name': '罔顾',
       'value': 14
     },
     {
       'name': '奥斯陆',
       'value': 14
     },
     {
       'name': '言也',
       'value': 14
     },
     {
       'name': '关炜宁',
       'value': 14
     },
     {
       'name': '王思强',
       'value': 14
     },
     {
       'name': '殷智贤',
       'value': 14
     },
     {
       'name': '麻隆',
       'value': 14
     },
     {
       'name': '郑州瑞',
       'value': 13
     },
     {
       'name': ' 路',
       'value': 13
     },
     {
       'name': '周四净',
       'value': 13
     },
     {
       'name': '焦企',
       'value': 13
     }
   ]
   let index = 0
  module.exports = {
    created () {
      this.chartData = {
        measures: Data
      }
      this.chartSettings = {
        textStyle: {
          normal: {
            fontWeight: '500',
            color: function () {
              var arr = ['#5182e4','rgb(155, 204, 102)','rgb(63, 178, 126)','rgb(247, 203, 74)','rgb(248, 141, 72)','rgb(243, 83, 82)','rgb(206, 98, 214)','rgb(137, 84, 212)','rgb(81, 86, 184)','rgb(81, 180, 241)','rgb(105, 212, 219)','rgb(212, 45, 107)']
              index++;
              if(index > arr.length) index= 0  // 从颜色数组轮询取色
              return arr[index]
            }
          }
        },
        rotationRange: [-90, 90],
        rotationStep: 90,
        gridSize: 5,
        tooltip:{}
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| textStyle | 文字样式| Object | - | |
| tooltip | 提示框组件 | Object | - | |
| rotationRange | 设置文字角度范围 | Array | - | |
| rotationStep | 设置角度步长 | Number | - | |
| gridSize | 文字间距 | Number | - | |
| shape | 词云形状| String |  circle (default)，cardioid，diamond，triangle  | |

> Tip: 其他配置项请参考[wordcloud](https://github.com/ecomfe/echarts-wordcloud)
