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
  name: '环形图',
  type: 'donut',
  chartData: [
    {
      title: '简单环形图',
      data: baseData,
      settings: {}
    }
  ]
}
