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

const level2Data = {
  measures: [
    {
      name: 'oneTree',
      value: {
        name: '一级分类',
        children: baseData
      }
    }
  ]
}

export default {
  name: '树图',
  type: 'tree',
  chartData: [
    {
      title: '右侧分布',
      data: level2Data,
      settings: {}
    },
    {
      title: '左侧分布',
      data: level2Data,
      settings: {
        seriesMap: [
          {
            orient: 'RL'
          }
        ]
      }
    },
    {
      title: '自上而下分布',
      data: level2Data,
      settings: {
        seriesMap: [
          {
            orient: 'TB'
          }
        ]
      }
    },
    {
      title: '自下而上分布',
      data: level2Data,
      settings: {
        seriesMap: [
          {
            orient: 'BT'
          }
        ],
        labelRotate: 45
      }
    },
    {
      title: '径向树图',
      data: level2Data,
      settings: {
        seriesMap: [
          {
            layout: 'radial'
          }
        ]
      }
    }
  ]
}
