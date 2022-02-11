# 地图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/84kfcbsg/7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 简单地图

<vuep template="#basicGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicGeo">

<template>
  <ve-geo-chart :data="chartData" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '河南', value: randomData() },
            { name: '云南', value: randomData() },
            { name: '辽宁', value: randomData() },
            { name: '黑龙江', value: randomData() },
            { name: '湖南', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '山东', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '江苏', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '湖北', value: randomData() },
            { name: '广西', value: randomData() },
            { name: '甘肃', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '陕西', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '贵州', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '青海', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '海南', value: randomData() },
            { name: '台湾', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        }
      ]
    }
  }
}
</script>

## 显示标签

<vuep template="#labelGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="labelGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '河南', value: randomData() },
            { name: '云南', value: randomData() },
            { name: '辽宁', value: randomData() },
            { name: '黑龙江', value: randomData() },
            { name: '湖南', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '山东', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '江苏', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '湖北', value: randomData() },
            { name: '广西', value: randomData() },
            { name: '甘肃', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '陕西', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '贵州', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '青海', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '海南', value: randomData() },
            { name: '台湾', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      labelVisible: true,
      label: {
        normal: {
          show: true,
          color: '#333',
          fontSize: 13
        }
      }
    }
  }
}
</script>

## 视觉映射

<vuep template="#visualMapGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="visualMapGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '河南', value: randomData() },
            { name: '云南', value: randomData() },
            { name: '辽宁', value: randomData() },
            { name: '黑龙江', value: randomData() },
            { name: '湖南', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '山东', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '江苏', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '湖北', value: randomData() },
            { name: '广西', value: randomData() },
            { name: '甘肃', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '陕西', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '贵州', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '青海', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '海南', value: randomData() },
            { name: '台湾', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        },
        {
          name: 'iPhone XS',
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      visualMapVisible: true,
      visualMap: {
        inRange: {
          color: ['#C6FFDD', '#FBD786', '#f7797d']
        }
      }
    }
  }
}
</script>

## 个性化地图样式

<vuep template="#itemStyleGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="itemStyleGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '河南', value: randomData() },
            { name: '云南', value: randomData() },
            { name: '辽宁', value: randomData() },
            { name: '黑龙江', value: randomData() },
            { name: '湖南', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '山东', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '江苏', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '湖北', value: randomData() },
            { name: '广西', value: randomData() },
            { name: '甘肃', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '陕西', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '贵州', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '青海', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '海南', value: randomData() },
            { name: '台湾', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      itemStyle: {
        normal: {
          areaColor: '#020933',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 10
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    }
  }
}
</script>

## 地图 + 散点图

<vuep template="#scatterGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="scatterGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京市', value: randomData() },
            { name: '鄂尔多斯', value: randomData() },
            { name: '天津市', value: randomData() },
            { name: '重庆市', value: randomData() },
            { name: '齐齐哈尔', value: randomData() },
            { name: '桂林', value: randomData() },
            { name: '赤峰', value: randomData() },
            { name: '青岛', value: randomData() },
            { name: '乳山', value: randomData() },
            { name: '泉州', value: randomData() },
            { name: '文登', value: randomData() },
            { name: '烟台', value: randomData() },
            { name: '长沙', value: randomData() },
            { name: '阳泉', value: randomData() },
            { name: '贵阳', value: randomData() },
            { name: '威海', value: randomData() },
            { name: '宿迁', value: randomData() },
            { name: '珠海', value: randomData() },
            { name: '海口', value: randomData() },
            { name: '佛山', value: randomData() },
            { name: '广州', value: randomData() },
            { name: '乌鲁木齐', value: randomData() },
            { name: '葫芦岛', value: randomData() },
            { name: '连云港', value: randomData() },
            { name: '昆明', value: randomData() },
            { name: '大理', value: randomData() },
            { name: '丽江', value: randomData() },
            { name: '成都', value: randomData() },
            { name: '乐山', value: randomData() },
            { name: '宁波', value: randomData() },
            { name: '杭州', value: randomData() },
            { name: '深圳', value: randomData() },
            { name: '武汉', value: randomData() },
            { name: '洛阳', value: randomData() },
            { name: '太原', value: randomData() },
            { name: '长春', value: randomData() },
            { name: '玉溪', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      mode: 'scatter'
    }
  }
}
</script>

## 地图 + 涟漪散点图

<vuep template="#effectScatterGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="effectScatterGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京市', value: randomData() },
            { name: '鄂尔多斯', value: randomData() },
            { name: '天津市', value: randomData() },
            { name: '重庆市', value: randomData() },
            { name: '齐齐哈尔', value: randomData() },
            { name: '桂林', value: randomData() },
            { name: '赤峰', value: randomData() },
            { name: '青岛', value: randomData() },
            { name: '乳山', value: randomData() },
            { name: '泉州', value: randomData() },
            { name: '文登', value: randomData() },
            { name: '烟台', value: randomData() },
            { name: '长沙', value: randomData() },
            { name: '阳泉', value: randomData() },
            { name: '贵阳', value: randomData() },
            { name: '威海', value: randomData() },
            { name: '宿迁', value: randomData() },
            { name: '珠海', value: randomData() },
            { name: '海口', value: randomData() },
            { name: '佛山', value: randomData() },
            { name: '广州', value: randomData() },
            { name: '乌鲁木齐', value: randomData() },
            { name: '葫芦岛', value: randomData() },
            { name: '连云港', value: randomData() },
            { name: '昆明', value: randomData() },
            { name: '大理', value: randomData() },
            { name: '丽江', value: randomData() },
            { name: '成都', value: randomData() },
            { name: '乐山', value: randomData() },
            { name: '宁波', value: randomData() },
            { name: '杭州', value: randomData() },
            { name: '深圳', value: randomData() },
            { name: '武汉', value: randomData() },
            { name: '洛阳', value: randomData() },
            { name: '太原', value: randomData() },
            { name: '长春', value: randomData() },
            { name: '玉溪', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      mode: 'effectScatter'
    }
  }
}
</script>

## 地图 + 飞线效果图

> 飞线图可以在地图上展现运动轨迹，可以用于展示不同地点之间的关系

<vuep template="#linesGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="linesGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: '北京',
          data: [
            { name: '上海', value: randomData() },
            { name: '齐齐哈尔市', value: randomData() },
            { name: '西宁市', value: randomData() },
            { name: '昆明市', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      mode: 'lines',
      lineStyle: {
        color: '#ED3574',
        width: 1,
        opacity: 0.6,
        curveness: 0.2
      },
      lineEffectVisible: false,
      lineEffect: {
        period: 0,
        trailLength: 0,
        color: '#fff',
        symbolSize: 3
      },
      overlayEffectVisible: true,
      overlayEffect: {
        period: 5,
        trailLength: 0.4,
        symbol: 'arrow',
        symbolSize: 6
      },
      effectScatterLabelVisible: true,
      effectScatterLabel: {
        normal: { position: 'left' }
      },
      visualMapVisible: true,
      visualMap: {
        inRange: {
          color: [ '#C6FFDD', '#FBD786', '#f7797d' ]
        }
      },
      symbolSize: 10,
      itemStyle: {
        normal: {
          areaColor: '#020933',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 10
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    }
  }
}
</script>

## 地图下钻

<vuep template="#insideGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="insideGeo">

<template>
  <ve-geo-chart
    :title="title"
    :data="chartData"
    :settings="chartSettings"
    :legend-visible="false"
    background-color="#020933"
    @click="onClick"
    @blankClick="onClickBlank"
  />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  data () {
    return {
      title: {},
      provinceInfo: [
        {'id': '1', 'name': '北京', 'pinyin': 'beijing'},
        {'id': '2', 'name': '上海', 'pinyin': 'shanghai'},
        {'id': '3', 'name': '天津', 'pinyin': 'tianjin'},
        {'id': '4', 'name': '重庆', 'pinyin': 'chongqing'},
        {'id': '5', 'name': '河北', 'pinyin': 'hebei'},
        {'id': '6', 'name': '山西', 'pinyin': 'shanxi'},
        {'id': '7', 'name': '河南', 'pinyin': 'henan'},
        {'id': '8', 'name': '辽宁', 'pinyin': 'liaoning'},
        {'id': '9', 'name': '吉林', 'pinyin': 'jilin'},
        {'id': '10', 'name': '黑龙江', 'pinyin': 'heilongjiang'},
        {'id': '11', 'name': '内蒙古', 'pinyin': 'neimenggu'},
        {'id': '12', 'name': '江苏', 'pinyin': 'jiangsu'},
        {'id': '13', 'name': '山东', 'pinyin': 'shandong'},
        {'id': '14', 'name': '安徽', 'pinyin': 'anhui'},
        {'id': '15', 'name': '浙江', 'pinyin': 'zejiang'},
        {'id': '16', 'name': '福建', 'pinyin': 'fujian'},
        {'id': '17', 'name': '湖北', 'pinyin': 'hubei'},
        {'id': '18', 'name': '湖南', 'pinyin': 'hunan'},
        {'id': '19', 'name': '广东', 'pinyin': 'guangdong'},
        {'id': '20', 'name': '广西', 'pinyin': 'guangxi'},
        {'id': '21', 'name': '江西', 'pinyin': 'jiangxi'},
        {'id': '22', 'name': '四川', 'pinyin': 'sichuan'},
        {'id': '23', 'name': '海南', 'pinyin': 'hainan'},
        {'id': '24', 'name': '贵州', 'pinyin': 'guizhou'},
        {'id': '25', 'name': '云南', 'pinyin': 'yunnan'},
        {'id': '26', 'name': '西藏', 'pinyin': 'xizang'},
        {'id': '27', 'name': '陕西', 'pinyin': 'shanxi'},
        {'id': '28', 'name': '甘肃', 'pinyin': 'gansu'},
        {'id': '29', 'name': '青海', 'pinyin': 'qinghai'},
        {'id': '30', 'name': '宁夏', 'pinyin': 'ningxia'},
        {'id': '31', 'name': '新疆', 'pinyin': 'xinjiang'},
        {'id': '32', 'name': '台湾', 'pinyin': 'taiwan'},
        {'id': '33', 'name': '香港', 'pinyin': 'xianggang'},
        {'id': '34', 'name': '澳门', 'pinyin': 'aomen'}
      ]
    }
  },
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: '北京市', value: randomData() },
            { name: '鄂尔多斯', value: randomData() },
            { name: '天津市', value: randomData() },
            { name: '重庆市', value: randomData() },
            { name: '齐齐哈尔', value: randomData() },
            { name: '桂林', value: randomData() },
            { name: '赤峰', value: randomData() },
            { name: '青岛', value: randomData() },
            { name: '乳山', value: randomData() },
            { name: '泉州', value: randomData() },
            { name: '文登', value: randomData() },
            { name: '烟台', value: randomData() },
            { name: '长沙', value: randomData() },
            { name: '阳泉', value: randomData() },
            { name: '贵阳', value: randomData() },
            { name: '威海', value: randomData() },
            { name: '宿迁', value: randomData() },
            { name: '珠海', value: randomData() },
            { name: '海口', value: randomData() },
            { name: '佛山', value: randomData() },
            { name: '广州', value: randomData() },
            { name: '乌鲁木齐', value: randomData() },
            { name: '葫芦岛', value: randomData() },
            { name: '连云港', value: randomData() },
            { name: '昆明', value: randomData() },
            { name: '大理', value: randomData() },
            { name: '丽江', value: randomData() },
            { name: '成都', value: randomData() },
            { name: '乐山', value: randomData() },
            { name: '宁波', value: randomData() },
            { name: '杭州', value: randomData() },
            { name: '深圳', value: randomData() },
            { name: '武汉', value: randomData() },
            { name: '洛阳', value: randomData() },
            { name: '太原', value: randomData() },
            { name: '长春', value: randomData() },
            { name: '玉溪', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      mode: 'effectScatter',
      mapName: 'china',
      visualMapVisible: true,
      visualMap: {
        inRange: { color: ['#4af', '#1ea'] },
        textStyle: {
          color: '#fff'
        }
      },
      labelVisible: true,
      itemStyle: {
        normal: {
          areaColor: 'transparent',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 30
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      label: {
        normal: {
          show: true,
          color: '#1af',
          fontSize: 13
        },
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      symbolSize: 15
    }
  },
  methods: {
    onClick(e) {
      this.title = {
        text: `选中：${e.name}`,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      }
      const idx = this.provinceInfo.findIndex(v => v.name === e.name)
      if (idx !== -1) {
        const province =  this.provinceInfo[idx].pinyin
        this.chartSettings.mapName = `province/${province}`
      } else {
        this.chartSettings.mapName = 'china'
      }
    },
    onClickBlank(e) {
      this.title = {
        text: `选中：空白处`,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      }
      this.chartSettings.mapName = 'china'
    }
  }
}
</script>

## 通过外部URL渲染地图

> 地图组件默认渲染的地图为中国地图，可通过外部链接获取相应的 `GeoJson` 渲染其他国家地图

<vuep template="#otherGeo" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="otherGeo">

<template>
  <ve-geo-chart :data="chartData" :settings="chartSettings" :legend-visible="false" />
</template>

<script>
const randomData = () => {
  return Math.round(Math.random() * 1000)
}

module.exports = {
  created () {
    this.chartData = {
      measures: [
        {
          name: 'iPhone XR',
          data: [
            { name: 'Alaska', value: randomData() },
            { name: 'Alabama', value: randomData() },
            { name: 'Arizona', value: randomData() },
            { name: 'Arkansas', value: randomData() },
            { name: 'California', value: randomData() },
            { name: 'Colorado', value: randomData() },
            { name: 'Connecticut', value: randomData() },
            { name: 'Delaware', value: randomData() },
            { name: 'District of Columbia', value: randomData() },
            { name: 'Florida', value: randomData() },
            { name: 'Georgia', value: randomData() },
            { name: 'Hawaii', value: randomData() },
            { name: 'Idaho', value: randomData() },
            { name: 'Illinois', value: randomData() },
            { name: 'Indiana', value: randomData() },
            { name: 'Iowa', value: randomData() },
            { name: 'Kansas', value: randomData() },
            { name: 'Kentucky', value: randomData() },
            { name: 'Louisiana', value: randomData() },
            { name: 'Maine', value: randomData() },
            { name: 'Maryland', value: randomData() },
            { name: 'Massachusetts', value: randomData() },
            { name: 'Michigan', value: randomData() },
            { name: 'Minnesota', value: randomData() },
            { name: 'Mississippi', value: randomData() },
            { name: 'Missouri', value: randomData() },
            { name: 'Montana', value: randomData() },
            { name: 'Nebraska', value: randomData() },
            { name: 'Nevada', value: randomData() },
            { name: 'New Hampshire', value: randomData() },
            { name: 'New Jersey', value: randomData() },
            { name: 'New Mexico', value: randomData() },
            { name: 'New York', value: randomData() },
            { name: 'North Carolina', value: randomData() },
            { name: 'North Dakota', value: randomData() },
            { name: 'Ohio', value: randomData() },
            { name: 'Oklahoma', value: randomData() },
            { name: 'Oregon', value: randomData() },
            { name: 'Pennsylvania', value: randomData() },
            { name: 'Rhode Island', value: randomData() },
            { name: 'South Carolina', value: randomData() },
            { name: 'South Dakota', value: randomData() },
            { name: 'Tennessee', value: randomData() },
            { name: 'Texas', value: randomData() },
            { name: 'Utah', value: randomData() },
            { name: 'Polygon', value: randomData() },
            { name: 'Virginia', value: randomData() },
            { name: 'Vermont', value: randomData() },
            { name: 'Washington', value: randomData() },
            { name: 'West Virginia', value: randomData() },
            { name: 'Wisconsin', value: randomData() },
            { name: 'Wyoming', value: randomData() },
            { name: 'Puerto Rico', value: randomData() }
          ]
        }
      ]
    }
    this.chartSettings = {
      visualMapVisible: true,
      visualMap: {
        inRange: {
          color: ['#C6FFDD', '#FBD786', '#f7797d']
        }
      },
      mapUrlPrefix: 'https://raw.githubusercontent.com/pissang/starbucks/gh-pages/json/',
      mapName: 'USA'
    }
  }
}
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| mode | geo地图支持不同的模式 | String | 默认为 `map`，可选 `scatter`、`effectScatter`、`heatmap`、`lines`|
| mapName | 地图名称 | String | 默认为 `china`，中国地图可选 `china-cities`、`china-contour`、`province/beijing`，可传入自定义地图名称 |
| mapUrlPrefix | 地图链接前缀 | String | 默认为 `https://unpkg.com/echarts@4.1.0/map/json/`，可传入自定义地址 |
| visualMapVisible | 视觉映射开关 | Boolean | 默认为 `false`，可选 `true` |
| visualMap | 视觉映射配置 | Object | 参见[文档](https://echarts.baidu.com/option.html#visualMap) |
| labelVisible | 图形文本标签开关 | Boolean | 默认为 `false`，可选 `true` |
| label | 图形上的文本标签 | Object | 参见[文档](https://echarts.baidu.com/option.html#series-map.label) |
| itemStyle | 地图区域的多边形 图形样式 | Object | 参见[文档](https://echarts.baidu.com/option.html#series-map.itemStyle) |
| roam | 是否开启鼠标缩放和平移漫游 | [Boolean, String] | 默认为 `false` 可以设置成 `scale` 或者 `move`。设置成 `true` 为都开启 |
| zoom | 当前视角的缩放比例 | Number | 默认为 `1` |
| symbolSize | 散点图标记的大小 | number, Array, Function | 参见[文档](https://echarts.baidu.com/option.html#series-scatter.symbolSize) |
| lineStyle | 线样式配置 | Object | 参见[文档](https://echarts.apache.org/zh/option.html#series-lines.lineStyle) |
| lineEffectVisible | 线特效开关 | Boolean | 默认为 `false`，可选 `true` |
| lineEffect | 线特效配置 | Object | 参见[文档](https://echarts.apache.org/zh/option.html#series-lines.effect) |
| overlayEffectVisible | overlay 特效开关 | Boolean | 默认为 `true`，可选 `false` |
| overlayEffect | overlay 特效配置 | Object | 参见[文档](https://echarts.apache.org/zh/option.html#series-lines.effect) |
| effectScatterLabelVisible | effectScatter 图形文本标签开关 | Boolean | 默认为 `false`，可选 `true` |
| effectScatterLabel | effectScatter 图形文本标签 | Object | 参见[文档](https://echarts.apache.org/zh/option.html#series-lines.label) |


> Tip1: mode 为非 map 时，使用 `coordinateSystem` 配置地理坐标系为 `geo` 生成地图

> Tip2: mapName 为地图名称，在 geo 组件或者 map 图表类型中设置的 map 对应的就是该值

> Tip3: mapUrlPrefix 搭配 mapName 即为 geoJson 地址，可以用来获得 registerMap 所需的 geoJson
