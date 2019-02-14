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
        visualMapVisible: true,
        visualMap: {
          inRange: {
            color: ['#C6FFDD', '#FBD786', '#f7797d']
          }
        }
      }
    },
    {
      title: 'iPhone XR 销量情况',
      data: baseData,
      settings: {
        mode: 'effectScatter',
        visualMapVisible: true,
        visualMap: {
          inRange: {
            color: ['#C6FFDD', '#FBD786', '#f7797d']
          }
        },
        labelVisible: true,
        label: {
          normal: {
            show: false,
            color: '#fff'
          },
          emphasis: {
            show: false,
            color: '#fff'
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#020933',
            borderColor: '#3fdaff',
            borderWidth: 1,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 30
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        symbolSize: 15,
        zoom: 1.2
      }
    }
  ]
}
