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
        selectedMode: 'single'
      }
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
