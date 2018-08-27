# 树图

## 基础树图 - 默认右侧分布

<vuep template="#basicTree" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicTree">
<template>
  <ve-tree-chart :data="chartData" />
</template>

<script>
  const treeData = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 66
    }, {
      name: '分类 10',
      value: 52
    }]
  }
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: 'TreeOne',
          value: treeData
        }]
      }
    }
  }
</script>

## 树图 - 左侧分布

<vuep template="#rlTree" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rlTree">
<template>
  <ve-tree-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const treeData = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 66
    }, {
      name: '分类 10',
      value: 52
    }]
  }
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: 'TreeOne',
          value: treeData
        }]
      }
      this.chartSettings = {
        seriesMap: [{
          orient: 'RL'
        }]
      }
    }
  }
</script>

## 树图 - 自上而下分布

<vuep template="#tbTree" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="tbTree">
<template>
  <ve-tree-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const treeData = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 66
    }, {
      name: '分类 10',
      value: 52
    }]
  }
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          value: treeData
        }]
      }
      this.chartSettings = {
        seriesMap: [{
          orient: 'TB'
        }]
      }
    }
  }
</script>

## 树图 - 自下而上分布

<vuep template="#btTree" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="btTree">
<template>
  <ve-tree-chart :data="chartData" :legend-visible="legendVisiable" :settings="chartSettings" />
</template>

<script>
  const treeData = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 66
    }, {
      name: '分类 10',
      value: 52
    }]
  }
  module.exports = {
    created () {
      this.legendVisiable = false
      this.chartData = {
        measures: [{
          name: 'TreeOne',
          value: treeData
        }]
      }
      this.chartSettings = {
        seriesMap: [{
          orient: 'BT'
        }],
        labelRotate: 90
      }
    }
  }
</script>

## 径向树图

<vuep template="#radialTree" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="radialTree">
<template>
  <ve-tree-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const treeData = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 66
    }, {
      name: '分类 10',
      value: 52
    }]
  }
  module.exports = {
    created () {
      this.legendVisiable = false
      this.chartData = {
        measures: [{
          name: 'TreeOne',
          value: treeData
        }]
      }
      this.chartSettings = {
        seriesMap: [{
          layout: 'radial'
        }]
      }
    }
  }
</script>

## 多个树图

<vuep template="#multipleTrees" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="multipleTrees">
<template>
  <ve-tree-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  const treeData1 = {
    name: '一级分类',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 300
    }, {
      name: '分类 4',
      value: 150
    }, {
      name: '分类 5',
      value: 115
    }]
  }
  const treeData2 = {
    name: '终端',
    children: [{
      name: 'App',
      value: 40000
    }, {
      name: 'PC',
      value: 27800
    }, {
      name: '微信',
      value: 22000
    }, {
      name: '小程序',
      value: 20200
    }, {
      name: '手Q',
      value: 15600
    }]
  }
  module.exports = {
    created () {
      this.legendVisiable = false
      this.chartData = {
        measures: [{
          name: 'TreeOne',
          value: treeData1
        }, {
          name: 'TreeTwo',
          value: treeData2
        }]
      }
      this.chartSettings = {
        seriesMap: [{
          top: '5%',
          left: '12%',
          bottom: '2%',
          right: '60%'
        }, {
          top: '20%',
          left: '60%',
          bottom: '18%',
          right: '18%'
        }]
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| data.measures | 树图只需要度量即可渲染 | Array | - | |
| seriesMap | 除数据外的其他series映射 | Array | - | 如果有多个树图渲染，按数组索引映射树图配置 |
| labelRotate | 设置树图标签的旋转值 | Number | - | [参考配置](http://echarts.baidu.com/option.html#series-tree.label.rotate) |

> Tip: 其他配置项请参考[tree](http://echarts.baidu.com/option.html#series-tree)
