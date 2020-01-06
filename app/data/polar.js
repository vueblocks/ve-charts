let data = []

for (let i = 0; i <= 100; i++) {
  let theta = i / 100 * 360
  let r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
  data.push([r, theta])
}

console.log(data)

// const polarData = {
//   dimensions: {
//     data: []
//   },
//   measures: [{
//     name: 'Polar Line',
//     data: data
//   }]
// }

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
    // {
    //   title: '基础极区图（线）',
    //   data: polarData,
    //   settings: {
    //     polarType: 'line'
    //   }
    // },
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
      }
    }
  ]
}
