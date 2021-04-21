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

const geolinesData = {
  measures: [
    {
      name: '北京',
      data: [
        { name: '上海', value: randomData() },
        { name: '齐齐哈尔市', value: randomData() },
        { name: '西宁市', value: randomData() },
        { name: '昆明市', value: randomData() }
      ]
    }
  ]
}

export default {
  name: '地图',
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
      },
      xprops: {
        legendVisible: false
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
        labelVisible: false,
        label: {
          show: false,
          color: '#fff',
          emphasis: {
            show: false,
            color: '#fff'
          }
        },
        itemStyle: {
          areaColor: '#020933',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 30,
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        symbolSize: 15,
        mapUrlPrefix: 'https://raw.githubusercontent.com/pissang/starbucks/gh-pages/json/',
        mapName: 'USA'
      }
    },
    {
      title: '飞线地图',
      data: geolinesData,
      settings: {
        mode: 'lines',
        lineStyle: {
          color: '#ED3574',
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        },
        lineEffectVisible: false,
        lineEffect: {
          period: 0,
          trailLength: 0,
          color: '#fff',
          symbolSize: 3
        },
        overlayEffectVisible: true,
        overlayEffect: {
          period: 5,
          trailLength: 0.4,
          symbol: 'arrow',
          symbolSize: 6
        },
        effectScatterLabelVisible: true,
        effectScatterLabel: {
          normal: {
            position: 'left'
          }
        },
        visualMapVisible: true,
        visualMap: {
          inRange: {
            color: ['#C6FFDD', '#FBD786', '#f7797d']
          }
        },
        symbolSize: 10,
        itemStyle: {
          areaColor: '#020933',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 10,
          emphasis: {
            areaColor: '#2B91B7'
          }
        }
      },
      xprops: {
        legendVisible: false
      }
    }
  ]
}
