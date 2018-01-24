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
  name: '环形图',
  type: 'donut',
  chartData: [
    {
      title: '简单环形图',
      data: baseData,
      settings: {}
    },
    {
      title: '选中环形图扇区',
      data: baseData,
      settings: {
        selectedMode: 'single'
      }
    },
    {
      title: '设置环形图半径',
      data: baseData,
      settings: {
        radius: ['35%', '55%']
      }
    }
  ]
}
