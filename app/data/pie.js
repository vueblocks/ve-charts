const baseData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [{
    name: 'PV',
    data: [40000, 27800, 22000, 20200, 15600, 13600]
  }]
}

const pieDonut = [
  {
    dimensions: {
      name: '渠道',
      data: ['移动设备', 'PC']
    },
    measures: [{
      name: 'PV',
      data: [150000, 90000]
    }]
  },
  {
    dimensions: {
      name: '渠道',
      data: ['APP', 'M端', '微信', '手Q', '小程序', 'PC']
    },
    measures: [{
      name: 'PV',
      data: [40000, 30000, 20000, 50000, 10000, 90000]
    }]
  }
]

export default {
  name: '饼图',
  type: 'pie',
  chartData: [
    {
      title: '简单饼图',
      data: baseData,
      settings: {}
    },
    {
      title: '饼图 - 选中扇区',
      data: baseData,
      settings: {
        selectedMode: 'single',
        legendSelected: 3
      }
    },
    {
      title: '环饼图',
      data: pieDonut,
      settings: [{
        selectedMode: 'single',
        radius: [0, '30%'],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'inner'
          }
        }
      }, {
        selectedMode: 'single',
        radius: ['40%', '55%']
      }]
    },
    {
      title: '南丁格尔玫瑰图（半径模式）',
      data: baseData,
      settings: {
        roseType: 'radius',
        radius: [30, 110]
      }
    },
    {
      title: '南丁格尔玫瑰图（面积模式）',
      data: baseData,
      settings: {
        roseType: 'area',
        radius: [30, 110]
      }
    }
  ]
}
