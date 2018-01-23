const baseData = {
  dimensions: [
    'Vue', 'React', 'Create React App', 'Puppeteer', 'Axios',
    'VS Code', 'Prettier', 'React Native', 'Element', 'Electron'
  ],
  measures: [{
    name: '2017',
    data: [40000, 27800, 22500, 22000, 21900, 20200, 17700, 15600, 14900, 14800]
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
    }
  ]
}
