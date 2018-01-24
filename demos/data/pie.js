const baseData = {
  dimensions: [
    'Vue', 'React', 'Puppeteer', 'VS Code', 'React Native', 'Electron'
  ],
  measures: [{
    name: '2017',
    data: [40000, 27800, 22000, 20200, 15600, 14800]
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
      title: '选中饼图扇区',
      data: baseData,
      settings: {
        selectedMode: 'single'
      }
    },
    {
      title: '南丁格尔玫瑰图（半径模式）',
      data: baseData,
      settings: {
        roseType: 'radius'
      }
    },
    {
      title: '南丁格尔玫瑰图（面积模式）',
      data: baseData,
      settings: {
        roseType: 'area'
      }
    }
  ]
}
