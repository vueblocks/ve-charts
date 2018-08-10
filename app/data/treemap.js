const baseData = [{
  name: '分类 1',
  value: 560
}, {
  name: '分类 2',
  value: 500
}, {
  name: '分类 3',
  value: 150
}, {
  name: '分类 4',
  value: 140
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
  value: 98
}, {
  name: '分类 10',
  value: 60
}]

const level1Data = {
  measures: baseData
}

const level2Data = {
  measures: [
    {
      name: '一级分类',
      children: baseData
    }
  ]
}

const packageData = {
  measures: [{
    name: 'element-ui',
    value: 540
  }, {
    name: 'echarts',
    value: 320
  }, {
    name: 'zrender',
    value: 132
  }, {
    name: 'vue',
    value: 84
  }, {
    name: 'lodash',
    value: 68
  }, {
    name: 'moment',
    value: 52
  }, {
    name: 'vue-router',
    value: 23
  }, {
    name: 'axios',
    value: 11
  }, {
    name: 'vuex',
    value: 9
  }]
}

export default {
  name: '矩形树图',
  type: 'treemap',
  chartData: [{
    title: '基础矩形树图',
    data: level1Data,
    settings: {}
  }, {
    title: '矩形树图 - 二级下钻',
    data: level2Data,
    settings: {
      leafDepth: 1
    }
  }, {
    title: '矩形树图 - 设置禁用缩放',
    data: packageData,
    settings: {
      name: 'package size',
      roam: 'move'
    },
    xprops: {
      tooltip: {
        formatter: '{b}:<br /> Package size: {c}KB'
      }
    }
  }]
}
