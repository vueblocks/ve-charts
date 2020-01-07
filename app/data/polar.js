let [data1, data2] = [[], []]

for (let i = 0; i <= 100; i++) {
  let theta = i / 100 * 360
  let r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
  data1.push([r, theta])
}

for (let i = 0; i <= 360; i++) {
  let t = i / 180 * Math.PI
  let r = Math.sin(2 * t) * Math.cos(2 * t)
  data2.push([r, i])
}

const twoNumberAxis = data => {
  return {
    legend: {
      data: ['line']
    },
    polar: {
      center: ['50%', '54%']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    angleAxis: {
      type: 'value',
      startAngle: 0
    },
    radiusAxis: {
      min: 0
    },
    series: [{
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      areaStyle: {},
      data
    }],
    animationDuration: 2000
  }
}

const polarData = {
  dimensions: {
    name: 'week',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  measures: [{
    name: '健身记录',
    data: [15, 30, 45, 60, 75, 90, 100]
  }]
}

const baseData = {
  dimensions: {
    name: 'product',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  measures: [
    {
      name: '2016',
      data: [43.2, 23.9, 87.7, 77.2]
    },
    {
      name: '2017',
      data: [33.9, 76.8, 65.1, 20.8]
    },
    {
      name: '2018',
      data: [90.7, 78.6, 28.7, 53.9]
    }
  ]
}

export default {
  name: '极区图',
  type: 'polar',
  chartData: [
    {
      title: '简单极区柱形图',
      data: polarData,
      settings: {
        polarType: 'bar'
      }
    },
    {
      title: '极区柱形图（环形）',
      data: baseData,
      settings: {
        polarType: 'bar'
      }
    },
    {
      title: '极区堆叠柱形图（环形）',
      data: baseData,
      settings: {
        polarType: 'bar',
        stack: {}
      }
    },
    {
      title: '极区面积图（径向）',
      data: baseData,
      settings: {
        polarType: 'line',
        radial: true,
        areaStyle: {}
      }
    },
    {
      title: '极区柱形图（径向）',
      data: baseData,
      settings: {
        polarType: 'bar',
        radial: true
      }
    },
    {
      title: '极区堆叠柱形图（径向）',
      data: baseData,
      settings: {
        polarType: 'bar',
        stack: {},
        radial: true
      },
      xprops: {
        legendVisible: false
      }
    },
    {
      title: '极坐标双数值轴',
      xprops: twoNumberAxis(data1)
    },
    {
      title: '极坐标双数值轴',
      xprops: twoNumberAxis(data2)
    }
  ]
}
