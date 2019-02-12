const randomData = () => {
  return Math.round(Math.random() * 1000)
}

const baseData = {
  measures: [
    {
      name: 'iPhone XR',
      data: [
        { name: '北京', value: randomData() },
        { name: '天津', value: randomData() },
        { name: '上海', value: randomData() },
        { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() },
        { name: '河南', value: randomData() },
        { name: '云南', value: randomData() },
        { name: '辽宁', value: randomData() },
        { name: '黑龙江', value: randomData() },
        { name: '湖南', value: randomData() },
        { name: '安徽', value: randomData() },
        { name: '山东', value: randomData() },
        { name: '新疆', value: randomData() },
        { name: '江苏', value: randomData() },
        { name: '浙江', value: randomData() },
        { name: '江西', value: randomData() },
        { name: '湖北', value: randomData() },
        { name: '广西', value: randomData() },
        { name: '甘肃', value: randomData() },
        { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() },
        { name: '陕西', value: randomData() },
        { name: '吉林', value: randomData() },
        { name: '福建', value: randomData() },
        { name: '贵州', value: randomData() },
        { name: '广东', value: randomData() },
        { name: '青海', value: randomData() },
        { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() },
        { name: '宁夏', value: randomData() },
        { name: '海南', value: randomData() },
        { name: '台湾', value: randomData() },
        { name: '香港', value: randomData() },
        { name: '澳门', value: randomData() }
      ]
    },
    {
      name: 'iPhone XS',
      data: [
        { name: '北京', value: randomData() },
        { name: '天津', value: randomData() },
        { name: '上海', value: randomData() },
        { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() },
        { name: '安徽', value: randomData() },
        { name: '新疆', value: randomData() },
        { name: '浙江', value: randomData() },
        { name: '江西', value: randomData() },
        { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() },
        { name: '吉林', value: randomData() },
        { name: '福建', value: randomData() },
        { name: '广东', value: randomData() },
        { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() },
        { name: '宁夏', value: randomData() },
        { name: '香港', value: randomData() },
        { name: '澳门', value: randomData() }
      ]
    }
  ]
}

export default {
  name: '中国地图',
  type: 'geo',
  chartData: [
    {
      title: 'iPhone XS 销量情况',
      data: baseData,
      settings: {
        showVisualMap: true,
        visualMapColor: ['#22c1c3', '#fdbb2d']
      }
    },
    {
      title: 'iPhone XR 销量情况',
      data: baseData,
      settings: {
        mode: 'scatter',
        showVisualMap: true,
        visualMapColor: ['#A1FFCE', '#FAFFD1'],
        // showLabel: true,
        itemStyle: {
          normal: {
            areaColor: 'rgba(24, 27, 45, 1)',
            borderColor: 'rgba(9, 77, 119, 1)'
          },
          emphasis: {
            areaColor: '#ff6060'
          }
        },
        label: {
          normal: {
            show: false,
            color: '#fff'
          },
          emphasis: {
            show: true,
            color: '#fff'
          }
        },
        symbolSize: 15,
        zoom: 1.5
      }
    }
  ]
}
