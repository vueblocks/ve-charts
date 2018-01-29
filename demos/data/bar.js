const baseData = {
  dimensions: {
    name: 'Year',
    data: [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
      'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ]
  },
  measures: [{
    name: 'Vue',
    data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
  },
  {
    name: 'React',
    data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
  },
  {
    name: 'Angular',
    data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
  }]
}

const simpleData = {
  dimensions: {
    name: 'Repo',
    data: [
      'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
      'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
    ].reverse()
  },
  measures: [{
    name: 'Rising Star',
    data: [40000, 27800, 22500, 22000, 21900, 20200, 17700, 15600, 14900, 14800].reverse()
  }]
}

const groupData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序'].reverse()
  },
  measures: [{
    name: 'PV',
    data: [36000, 28000, 24000, 20000, 12000, 6000].reverse()
  }, {
    name: 'UV',
    data: [28000, 22000, 18000, 14000, 8000, 2000].reverse()
  }]
}

const mixinData = {
  dimensions: {
    name: 'Year',
    data: [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
      'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ]
  },
  measures: [{
    name: 'Vue',
    data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
  },
  {
    name: 'React',
    data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
  }]
}

const biDirectionalData = {
  dimensions: {
    name: 'Week',
    data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.']
  },
  measures: [{
    name: '收入',
    data: [320, 100, 200, 270, 320, 250, 360]
  },
  {
    name: '支出',
    data: [-120, -132, -100, -130, -300, -230, -360]
  }]
}

export default {
  name: '柱状图',
  type: 'bar',
  chartData: [
    {
      title: '简单柱状图',
      data: baseData,
      settings: {}
    },
    {
      title: '显示文本标签',
      data: baseData,
      settings: {
        label: {
          show: true,
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }
    },
    {
      title: '堆叠柱状图',
      data: baseData,
      settings: {
        stack: {
          repo: [
            'React',
            'Angular'
          ]
        }
      }
    },
    {
      title: '条形图',
      data: simpleData,
      settings: {
        direction: 'row'
      }
    },
    {
      title: '分组条形图',
      data: groupData,
      settings: {
        direction: 'row'
      }
    },
    {
      title: '堆叠条形图',
      data: groupData,
      settings: {
        direction: 'row',
        stack: {
          sum: ['PV', 'UV']
        }
      }
    },
    {
      title: '折柱混合图',
      data: mixinData,
      settings: {
        showLine: ['Vue']
      }
    },
    {
      title: '双向柱状图',
      data: biDirectionalData,
      settings: {
        stack: {
          总量: ['收入', '支出']
        },
        label: {
          show: true,
          fontSize: '12px',
          fontWeight: 'bold',
          position: 'inside'
        }
      }
    }
  ]
}
